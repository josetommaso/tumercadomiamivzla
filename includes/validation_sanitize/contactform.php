<?php
  // Message Variables
  $msg = '';
  $msgClass = '';
  // Check for submit
  if (filter_has_var(INPUT_POST, 'submit')) {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $comment = htmlspecialchars($_POST['comment']);

    // Check required fields
    if (!empty($name) && !empty($phone) && !empty($email) && !empty($comment)) {
      // Passed
      // Check email
      if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        // Failed Email
        $msg = 'Por favor introduce un correo valido.';
        $msgClass = 'alert-danger';
      } else {
        // Passed email
        $toEmail = 'email@email.com';
        $subject = 'Formulario enviado de: '.$name;
        $body = "<h2>Solicitud de Contacto</h2>
                <h4>Nombre: </h4><p>' . $name'</p>
                <h4>Teléfono: </h4><p>' . $phone'</p>
                <h4>Email: </h4><p>' . $email'</p>
                <h4>Mensaje: </h4><p>' . $comment'</p>
        ";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";

        // Additional Headers
        $headers .= "From: " . $name . "<" . $email . ">" . "\r\n";

        if (mail($toEmail, $subject, $body, $headers)) {
          // Email Sent
          $msg = 'Tu email ha sido enviado.';
          $msgClass = 'alert-success';
        } else {
          // Email Failed
          $msg = 'Tu email no fue enviado.';
          $msgClass = 'alert-danger';
        }

      }
    } else {
      // Failed
      $msg = 'Por favor introduce todos los campos obligatorios.';
      $msgClass = 'alert-danger';
    }

  }
?>
