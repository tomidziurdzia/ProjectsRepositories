import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
