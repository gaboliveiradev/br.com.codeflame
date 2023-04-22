<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../../../View/css/getstarted/commands.style.css">
    <link rel="shortcut icon" href="./../../../View/assets/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="./../../../View/assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="./../../../View/css/welcome/index.style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    <title>Documentação Codeflame</title>
</head>
<body>
    <header>
        <?php include "./View/includes/navbar.php" ?>
    </header>

    <main>
        <section class="sec__commands__documentation">
            <h1>Comandos do <span>Codeflame</span></h1>
            <div class="sumario">
                <h3>Navegue para um comando específico</h3>
                <a href="#cmd1">CRIAR PROJETO MVC</a> 
                <a href="#cmd2">CRIAR CONTROLLER</a> 
                <a href="#cmd3">CRIAR MODEL</a> 
                <a href="#cmd4">CRIAR DAO</a>
                <a href="#cmd5">VER COMANDOS</a>
                <a href="#cmd6">VER VERSÃO ATUAL</a>
            </div>


            <div class="item" id="cmd1">
                <h2><i class="bi bi-stack"></i> Criar projeto MVC (Model View Controller)</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para criar um projeto MVC em questão de segundos. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame add/project-mvc NomeDoProjeto</p>
                    <p><span class="color__number">2</span> codeflame add-project-mvc NomeDoProjeto</p>
                    <p><span class="color__number">3</span> codeflame add/mvc NomeDoProjeto</p>
                    <p><span class="color__number">4</span> codeflame project/mvc NomeDoProjeto</p>
                    <p><span class="color__number">5</span> codeflame project-mvc NomeDoProjeto</p>
                    <p><span class="color__number">6</span> codeflame new-projec/mvc NomeDoProjeto</p>
                    <p><span class="color__number">7</span> codeflame new/mvc NomeDoProjeto</p>
                    <p><span class="color__number">8</span> codeflame mvc NomeDoProjeto</p>
                    <p><span class="color__number">9</span> cf add/project-mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">10</span> cf add-project-mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">11</span> cf add/mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">12</span> cf project/mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">13</span> cf project-mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">14</span> cf new-projec/mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">15</span> cf new/mvc NomeDoProjeto</p>
                    <p><span class="color__number pd">16</span> cf mvc NomeDoProjeto</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para criar um projeto MVC (Model View Controller)</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame add/project-mvc CrudLoja</p>
                    <p><span class="color__number">2</span> cf mvc EccomerceWebsite</p>
                </div>
            </div>

            <br>
            <hr>

            <div class="item" id="cmd2">
                <h2><i class="bi bi-dpad-fill"></i> Criar camada Controller</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para criar a camada controller em seu projeto. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame make:controller NomeDaController</p>
                    <p><span class="color__number">2</span> codeflame m:controller NomeDaController</p>
                    <p><span class="color__number">3</span> codeflame m:c NomeDaController</p>
                    <p><span class="color__number">4</span> cf make:controller NomeDaController</p>
                    <p><span class="color__number">5</span> cf m:controller NomeDaController</p>
                    <p><span class="color__number">6</span> cf m:c NomeDaController</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para criar um camada Controller</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame make:controller Usuario</p>
                    <p><span class="color__number">2</span> cf m:c UsuarioController</p>
                </div>
            </div>

            <br>
            <hr>

            <div class="item" id="cmd3">
                <h2><i class="bi bi-car-front"></i> Criar camada Model</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para criar a camada model em seu projeto. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame make:model NomeDaModel</p>
                    <p><span class="color__number">2</span> codeflame m:model NomeDaModel</p>
                    <p><span class="color__number">3</span> codeflame m:m NomeDaModel</p>
                    <p><span class="color__number">4</span> cf make:model NomeDaModel</p>
                    <p><span class="color__number">5</span> cf m:model NomeDaModel</p>
                    <p><span class="color__number">6</span> cf m:m NomeDaModel</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para criar um camada Model</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame make:model Usuario</p>
                    <p><span class="color__number">2</span> cf m:m UsuarioModel</p>
                </div>
            </div>

            <br>
            <hr>

            <div class="item" id="cmd4">
                <h2><i class="bi bi-database-fill"></i> Criar camada DAO</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para criar a camada DAO em seu projeto. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame make:dao NomeDaDAO</p>
                    <p><span class="color__number">2</span> codeflame m:dao NomeDaDAO</p>
                    <p><span class="color__number">3</span> codeflame m:d NomeDaDAO</p>
                    <p><span class="color__number">4</span> cf make:dao NomeDaDAO</p>
                    <p><span class="color__number">5</span> cf m:dao NomeDaDAO</p>
                    <p><span class="color__number">6</span> cf m:d NomeDaDAO</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para criar um camada DAO</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame make:dao Usuario</p>
                    <p><span class="color__number">2</span> cf m:d UsuarioDAO</p>
                </div>
            </div>

            <br>
            <hr>

            <div class="item" id="cmd5">
                <h2><i class="bi bi-broadcast"></i> Ver Todos os Comandos</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para ver todos os comandos existentes do codeflame. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame list</p>
                    <p><span class="color__number">2</span> codeflame commands</p>
                    <p><span class="color__number">3</span> codeflame cmd</p>
                    <p><span class="color__number">4</span> cf list</p>
                    <p><span class="color__number">5</span> cf commands</p>
                    <p><span class="color__number">6</span> cf cmd</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para ver todos os comandos do codeflame.</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame commands</p>
                    <p><span class="color__number">2</span> cf cmd</p>
                </div>
            </div>

            <br>
            <hr>

            <div class="item" id="cmd6">
                <h2><i class="bi bi-file-diff-fill"></i> Versão do Codeflame</h2>
                <p class="ptb-10">Abaixo estão todos os comandos e suas variações para ver a versão atual do codeflame. Basta escolher qual variação você se adapta melhor e digitar no seu prompt de comando.</p>
                <div class="cmd" name="all-commands">
                    <p><span class="color__number">1</span> codeflame --version</p>
                    <p><span class="color__number">2</span> codeflame --v</p>
                    <p><span class="color__number">3</span> cf --version</p>
                    <p><span class="color__number">4</span> cf --v</p>
                </div>
                <p class="ptb-10">Veja um exemplo de como utilizar o comando para ver a atual versão do codeflame.</p>
                <div class="cmd">
                    <p><span class="color__number">1</span> codeflame --version</p>
                    <p><span class="color__number">2</span> cf --v</p>
                </div>
            </div>
        </section>
    </main>
</body>
</html>