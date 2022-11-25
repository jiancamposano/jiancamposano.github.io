<section id="contacto">
        <h4>Ingrese su Reclamo</h4>
        <form action="https://formsubmit.co/customer@mocayasaduanera.com" method="POST">
            <div class="datos-form">
                <div class="nombre">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
                </div>

                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" required>
                </div>

                <div class="telefono">
                    <label for="telefono">Teléfono</label>
                    <input type="number" name="telefono" id="telefono" placeholder="Teléfono" required>
                </div>

                <div class="empresaa">
                    <label for="empresa">Empresa</label>
                    <input type="text" name="empresa" id="empresa" placeholder="Empresa" required>
                </div>
                
                <div class="ruc">
                    <label for="ruc">Ruc</label>
                    <input type="number" name="ruc" id="ruc" placeholder="Ruc" required>
                </div>

                <div class="direccion">
                    <label for="direccion">Dirección</label>
                    <input type="text" name="direccion" id="direccion" placeholder="Dirección" required>
                </div>

            </div>

            <div class="reclamo">
                <label for="reclamo">Reclamo</label>
                <textarea name="reclamo" id="reclamo" cols="30" rows="10" placeholder="Reclamo" required></textarea>
            </div>

            <div class="boton-formulario">
                <input type="submit" class="boton-saber-mas" value="Enviar" >
            </div>
           
            <input type="hidden" name="_next" value="https://jiancamposano.github.io/Mocayas/">
            <input type="hidden" name="_captcha" value="false"> 
        </form>
    </section>