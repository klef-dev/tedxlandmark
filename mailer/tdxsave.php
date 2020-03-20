<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
//header("Content-Type: application/json");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './vendor/autoload.php';

$email    = $_GET["email"];
$fullname = $_GET["fullname"];
$amount    = $_GET["amount"];
$ticket_no       = $_GET["ticket_no"];

$mail = new PHPMailer(true);

// Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0; // Enable verbose debug output
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com'; // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true; // Enable SMTP authentication
    $mail->Username   = 'emmanuel.adeojo.ibk@gmail.com'; // SMTP username
    $mail->Password   = 'LORDflex2221'; // SMTP password
    $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465; // TCP port to connect to 587
    
    //Recipients
    $mail->setFrom('tedxlandmarkuniversity@gmail.com', 'TedxLandmark');
    $mail->addAddress($email, $fullname); // Add a recipient
    
    //Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Ticket Booking';
    $mail->Body    = '<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>TedxLandmarkUniversity - Ticket Booking</title>
	  <style>
		html,
		body,
		table,
		tbody,
		tr,
		td,
		div,
		p,
		ul,
		ol,
		li,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
		  margin: 0;
		  padding: 0;
		}
	
		body {
		  margin: 0;
		  padding: 0;
		  font-size: 0;
		  line-height: 0;
		  -ms-text-size-adjust: 100%;
		  -webkit-text-size-adjust: 100%;
		}
	
		table {
		  border-spacing: 0;
		  mso-table-lspace: 0pt;
		  mso-table-rspace: 0pt;
		}
	
		table td {
		  border-collapse: collapse;
		}
	
		.ExternalClass {
		  width: 100%;
		}
	
		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
		  line-height: 100%;
		}
		/* Outermost container in Outlook.com */
	
		.ReadMsgBody {
		  width: 100%;
		}
	
		img {
		  -ms-interpolation-mode: bicubic;
		}
	
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
		  font-family: Arial;
		}
	
		h1 {
		  font-size: 28px;
		  line-height: 32px;
		  padding-top: 10px;
		  padding-bottom: 24px;
		}
	
		h2 {
		  font-size: 24px;
		  line-height: 28px;
		  padding-top: 10px;
		  padding-bottom: 20px;
		}
	
		h3 {
		  font-size: 20px;
		  line-height: 24px;
		  padding-top: 10px;
		  padding-bottom: 16px;
		}
	
		p {
		  font-size: 16px;
		  line-height: 20px;
		  font-family: Georgia, Arial, sans-serif;
		}
	
		</style>
	
		<style>
	
		  .container600 {
			width: 600px;
			max-width: 100%;
		  }
	
		@media all and (max-width: 599px) {
		  .container600 {
			width: 100% !important;
		  }
		  
		
		  .smarttable {
			border: 0;
		  }
		  .smarttable thead {
			display:none;
			border: none;
			clip: rect(0 0 0 0);
			height: 0px;
			margin: 0px;
			overflow: hidden;
			padding: 0;
			max-width:0px;
			max-height:0px;
		  }
		  .smarttable tr {
			display: block;
			width:90%;
			margin:20px auto;
		  }
		  .smarttable td {
			border-bottom: 1px solid #ddd;
			display: block;
			font-size: 15px;
			text-align: right;
		  }
		  .smarttable td:before {
			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		  }
	
		}
	  </style>
	
	   <!--[if gte mso 9]>
			<style>
				.ol {
				  width: 100%;
				}
			</style>
		<![endif]-->
	
	</head>
	<body style="background-color:#F4F4F4;">
	<center>

    <!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td>
                    <![endif]-->
    <table class="container600" cellpadding="0" cellspacing="0" border="0" width="100%"
        style="width:calc(100%);max-width:calc(600px);margin: 0 auto;">
        <tr>
            <td width="100%" style="text-align: left;">

                <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
                    <tr>
                        <td style="background-color:#FFFFFF;color:#000000;padding:30px;">
                            <img alt=""
                                src="/assets/img/TEDxlmu_white.png"
                                width="210" style="display: block;" />
                        </td>
                    </tr>
                </table>
                <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
                    <tr>
                        <td style="background-color:#F8F7F0;color:#58585A;padding:30px;">

                            <h1>TedxLandmarkUniversity - Ticket Booking</h1>
                            <p>Dear '.$fullname.', you just booked for your ticket and below is your invoice</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:20px;background-color:#F8F7F0;">

                            <table class="smarttable" width="100%" cellpadding="0" cellspacing="0"
                                style="min-width:100%;" border="2">
                                <thead>
                                    <tr>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            Name</th>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            No. of Tickets</th>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            '.$fullname.'</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            '.$ticket_no.'</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            '.$amount.'</td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>
                </table>
                <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
                    <tr>
                        <td style="background-color:#F8F7F0;color:#58585A;padding:30px;">
                            <p>Places and people you can make your payment to</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:20px;background-color:#F8F7F0;">

                            <table class="smarttable" width="100%" cellpadding="0" cellspacing="0"
                                style="min-width:100%;" border="2">
                                <thead>
                                    <tr>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            Name</th>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            Room Number</th>
                                        <th scope="col"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">
                                            Hall</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            KEMI ADELEYE</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            C213 OR A110</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            ABIGAL HALL</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            GLORIA ULOKO</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            B304</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            ABIGAL HALL</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            ELLA OKPERE</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            </td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            SARAH HALL</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            SAMUEL BAYO</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            D104</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            ISAAC HALL</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            OGEBE EMMANUEL</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            D115</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            ISAAC HALL</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Name" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            PRO’S OFFICE</td>
                                        <td data-label="Phone" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            CHAPEL</td>
                                        <td data-label="City" valign="top"
                                            style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">
                                            CHAPEL</td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>
                </table>
                <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
                    <tr>
                        <td width="100%" style="min-width:100%;background-color:#58585A;color:#FFFFFF;padding:30px;">
                            <p
                                style="font-size:16px;line-height:20px;font-family:Georgia,Arial,sans-serif;text-align:center;">
                                2020 @ COPYRIGHT - TedxLandmarkUniversity</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!--[if gte mso 9]></td></tr></table>
                    <![endif]-->
</center>
	</body>
</html>';
    $mail->send();
    echo json_encode(["msg" => "Sent", "error" => false]);
}
catch (Exception $e) {
    echo json_encode(array(
        "error" => true,
        "message" => 'Message could not be sent.',
        "error" => $mail->ErrorInfo,
        "data" => $data
    ));
}

?>
