module.exports = `
<!DOCTYPE html>
<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Koa Server HTML</title>
     <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
     <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
     <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
		<div class="row">
	    	<div class="col-md-8">Hi, <%= user.firstname %></div>	
            <div class="col-md-4"><%= user.lastname %></div>
        </div>	
    </div>
</body>
</html>
`