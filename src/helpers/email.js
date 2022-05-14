import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  // TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "05bc26d164e712",
      pass: "35999d48e095f2",
    },
  });

  // informacion del email
  const info = await transport.sendMail({
    from: '"Projects Repositories - Administrador de Proyectos" <cuentas@projectrepositories.com>',
    to: email,
    subject: "Projects Repositories - Confirmar cuenta",
    text: "Comprueba tu cuenta en Projects Repositories",
    html: ` <p>Hola ${nombre}, comprueba tu cuenta en Projects Repositories</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace
   
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
   
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  // TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "05bc26d164e712",
      pass: "35999d48e095f2",
    },
  });

  // informacion del email
  const info = await transport.sendMail({
    from: '"Projects Repositories - Administrador de Proyectos" <cuentas@projectrepositories.com>',
    to: email,
    subject: "Projects Repositories - Reestablecer contraseña",
    text: "Reestablecer contraseña",
    html: ` <p>Hola ${nombre}, reestablece tu contraseña</p>
    <p>Sigue el siguiente enlace para generar una nueva contraseña
   
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a></p>
   
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    `,
  });
};
