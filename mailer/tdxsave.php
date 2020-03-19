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
$token    = $_GET["token"];
$id       = $_GET["id"];
$from     = $_GET["from"];

$mail = new PHPMailer(true);

// Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 1; // Enable verbose debug output
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com'; // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true; // Enable SMTP authentication
    $mail->Username   = 'emmanuel.adeojo.ibk@gmail.com'; // SMTP username
    $mail->Password   = 'LORDflex2221'; // SMTP password
    $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465; // TCP port to connect to 587
    
    //Recipients
    $mail->setFrom('emmanuel.adeojo.ibk@gmail.com', 'Tradexplorer');
    $mail->addAddress($email, $fullname); // Add a recipient
    $mail->addReplyTo('noreply@tradexplorer.com', 'Do Not Reply');
    
    $url = 'https://localhost:1000/verification/' . $id . '/' . $token . '/' . $from;
    
    //Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Tradexplorer Verification';
    $mail->Body    = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Talorgang Verification</title>
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" href="https://raw.githubusercontent.com/adeojoemmanuel/tdxserver/master/logo.png" type="image/png">
	   <style type="text/css">
			@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
				body[yahoo] .buttonwrapper { background-color: transparent !important; }
				body[yahoo] .button { padding: 0 !important; }
				body[yahoo] .button a { background-color: #4caf50; padding: 15px 25px !important; }
			}

			@media only screen and (min-device-width: 601px) {
				.content { width: 600px !important; }
				.col387 { width: 387px !important; }
			}
			
			a.link1{
			  color:#382F2E;
			}
			a.link2{
			  font-size:16px;
			  text-decoration:none;
			  color:#ffffff;
			}
		</style>
	</head>
	<body bgcolor="#34495E" style="margin: 0; padding: 0;" yahoo="fix">
		<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;" class="content">
			
			<tr>
				<td align="center" bgcolor="#f9f9f9" style="color: #ffffff; font-family: Arial, sans-serif; font-size: 36px; font-weight: bold;">
					<img src="https://raw.githubusercontent.com/adeojoemmanuel/tdxserver/master/logo.png" alt="" data-default="placeholder" style="width:100px; height:100px">
				</td>
			</tr>
			
			<tr>
				<td align="center" bgcolor="#f9f9f9" style="color: #555555; font-family: Arial, sans-serif; font-size: 14px; line-height: 30px; border-bottom: 1px solid #f6f6f6;">
					
					<p style="width:90%;">Hi ' . $fullname . ',</p>
					<p style="width:90%;">
						Thank you for signing up on Tradexplorer. We are so happy you are here. We created Tradexplorer because we wanted to give Nigeria, a trustworthy place to find some of the best sellers and buyers from Nigeria. 
						
					</p>
					<p style="width:90%;">
						<span class="panel" style="display:block; width:90%; margin-bottom:20px; border:1px solid #afb7cc; background:transparent">
							<a href="' . $url . '" style="color:#d82334 !important;">
								' . $url . '
							</a>
						</span>
						<!-- <button class="panel" style="display:block; width:90%; margin-bottom:20px; border:1px solid #afb7cc; background:transparent">
							<a href="' . $url . '" style="color:#d82334 !important;"></a>
							Click the Link
						</button>
 						-->
						<span class="m-t-15 last">If clicking the URL above does not work, copy and paste the URL into a browser window.</span>
					</p>
					<p style="width:90%;">
					   Cheers, <br />
					   The Tradexplorer Team
					</p>

				</td>
			</tr>
			
			<tr>
				<td class="wrapper">
					<table class="twelve columns">
						<tr>
							<td>
								<p style="text-align:center">
									<a href="https://twitter.com/tradexplorer" style="margin-left:10px">
										<p style="float:none; margin:auto; display:inline-block;">Twitter</p>
									</a>
									<a href="https://www.facebook.com/tradexplorer" style="margin-left:10px">
										<p style="margin:auto; display:inline-block">Facebook</p>
									</a>
									<a href="https://www.instagram.com/tradexplorer/" style="margin-left:10px">
										<p style="float:none; margin:auto; display:inline-block">Instagram</p>
									</a>
								</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			
            <tr>
                <td align="center" bgcolor="#f9f9f9" style="padding: 15px 10px 15px 10px; color: #555555; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;">
                    <b>Tradexplorer </b><br/>NO 9, 5th avenue. &bull;  Gwarimpa Abuja &bull; +234 814 9848 925  |  +234 814 9848 925 
                </td>
            </tr>	
			
			<tr style="border-bottom:1px solid #ccc">
				<td class="wrapper">
					<table class="twelve columns">
						<tr>
							<td>
								<p style="width:100%; margin:20px 0px 20px 5%; text-align:center;">
									<a href="https://tradexplorer.com" style="color:#7a838a !important">ABOUT US</a> &nbsp; &nbsp; 
									<a href="https://tradexplorer.com/privacy" style="color:#7a838a !important">PRIVACY POLICY</a> &nbsp; &nbsp; 
									<a href="https://tradexplorer.com/terms" style="color:#7a838a !important">TERMS AND CONDITIONS</a>
								</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>';
    $mail->send();
    echo 1;
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
