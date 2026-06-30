*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f5f5f5;
    color:#222;
}

header{
    background:#111;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 60px;
}

.logo h2{
    color:#ff0000;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:20px;
    font-weight:bold;
}

nav a:hover{
    color:#ff0000;
}

.hero{
    background:linear-gradient(135deg,#ff0000,#111);
    color:white;
    text-align:center;
    padding:100px 20px;
}

.hero h1{
    font-size:48px;
    margin-bottom:15px;
}

.hero p{
    font-size:20px;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    background:white;
    color:#ff0000;
    padding:15px 35px;
    border-radius:8px;
    text-decoration:none;
    font-weight:bold;
}

.categories{
    max-width:1200px;
    margin:60px auto;
    padding:20px;
}

.categories h2{
    text-align:center;
    margin-bottom:30px;
}

.box{
    background:white;
    margin:15px;
    padding:25px;
    border-radius:10px;
    text-align:center;
    font-weight:bold;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
}

footer{
    background:#111;
    color:white;
    text-align:center;
    padding:30px;
    margin-top:60px;
}
