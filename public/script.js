document.addEventListener('DOMContentLoaded', () =>
{
    const mostrarCrearUsuarioFormBtn = document.getElementById('mostrarCrearUsuarioFormBtn');
    const crearUsuarioForm = document.getElementById('crearUsuarioForm');
    const editarUsuarioForm = document.getElementById('editarUsuarioForm');
    const listarUsuariosBtn = document.getElementById('listarUsuariosBtn');
    const listaUsuarios = document.getElementById('listaUsuarios');

    /*mostrarCrearUsuarioFormBtn.addEventListener('click',() =>
    {
        crearUsuarioForm.classList.toggle('hidden');
    });*/


    //CREAR USUARIOS NUEVOS
    crearUsuarioForm.addEventListener('submit', async (e) => 
    {
        e.preventDefault();//evita qaue la pagina se actualice

        const formData = new FormData(crearUsuarioForm);

        const data = 
        {
            nombre: formData.get('nombre'),
            apellido: formData.get('apellido'),
            dni: formData.get('dni'),
            mail: formData.get('mail'),
            telefono: formData.get('telefono')

        };

        const response = await fetch('/usuarios',
        {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        alert(result.message);
        crearUsuarioForm.reset();
        /*crearUsuarioForm.classList.add('hidden');*/
        listarUsuarios();
    });


    //EDITAR USUARIO
    editarUsuarioForm.addEventListener('submit', async(e) => 
    {   
        e.preventDefault();
        const formData = new FormData(editarUsuarioForm);

        const id = formData.get('editID');
        
        const data = 
        {
            nombre: formData.get('editNombre'),
            apellido: formData.get('editApellido'),
            dni: formData.get('editDni'),
            telefono: formData.get('editTelefono'),
            mail: formData.get('editMail')
        };

        const response = await fetch(`/usuarios/${id}`,
        {
            method: 'PUT',
            headers: 
            {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        alert(result.message);
        editarUsuarioForm.reset();
        editarUsuarioForm.classList.add('hidden');
        listarUsuarios();

    });



    listarUsuariosBtn.addEventListener('click',() =>
    {
        listaUsuarios.classList.toggle('hidden');
    });


    //listar todos los usuarios
    
    listarUsuariosBtn.addEventListener('click', listarUsuarios);

    async function listarUsuarios()
    {
        const response = await fetch('/usuarios');
        const usuarios = await response.json();

        listaUsuarios.innerHTML = '';

        usuarios.forEach(persona => 
            {
                const li = document.createElement('li');

                li.innerHTML = `
                    <span> ID: ${persona.id_persona}, Nombre: ${persona.nombre}, Apellido: ${persona.apellido}, DNI: ${persona.dni}, Email: ${persona.mail}, Telefono: ${persona.telefono} </span>
                    
                    <div class="actions"> 
                        <button class="update" data-id= "${persona.id_persona}" data-nombre="${persona.nombre}" data-apellido="${persona.apellido}" data-dni="${persona.dni}" data-mail="${persona.mail}" data-telefono="${persona.telefono}"> Actualizar </button>
                    
                        <button class="delete" data-id="${persona.id_persona}"> Eliminar </button>
                    </div>
                
                `;
                listaUsuarios.appendChild(li);
            });

            //ACTUALIZAR USUARIO
            document.querySelectorAll('.update').forEach(button => 
                {
                    button.addEventListener('click', (e) => 
                    {
                        const id = e.target.getAttribute('data-id');
                        const nombre = e.target.getAttribute('data-nombre');
                        const apellido = e.target.getAttribute('data-apellido');
                        const mail = e.target.getAttribute('data-mail');

                        document.getElementById('editID').value = id;
                        document.getElementById('editNombre').value = nombre;
                        document.getElementById('editApellido').value = apellido;
                        document.getElementById('editDni').value = dni;
                        document.getElementById('editTelefono').value = telefono;
                        document.getElementById('editMail').value = mail;



                        editarUsuarioForm.classList.remove('hidden');
                    });
                });


                document.querySelectorAll('.delete').forEach(button =>
                    {
                        button.addEventListener('click', async (e) =>
                        {
                            const id = e.target.getAttribute('data-id');
                            const response = await fetch(`/usuarios/${id}`,
                            {
                                method: 'DELETE'
                            });

                            const result = await response.json();
                            alert(result.message);
                            listarUsuarios();

                        });

                    });


    }


});