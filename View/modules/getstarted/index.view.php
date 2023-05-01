<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../../../View/css/getstarted/index.style.css">
    <link rel="shortcut icon" href="./../../../View/assets/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="./../../../View/assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="./../../../View/css/welcome/index.style.css">
    <link rel="stylesheet" href="./../../../View/css/getstarted/index.style.css">
    <title>Get Started with Codeflame</title>
</head>
<body>
    <header>
        <?php include "./View/includes/navbar.php" ?>
    </header>

    <main>
        <section class="sec__install__codeflame">
            <h1>Como instalar o <span>Codeflame</span></h1>

            <div class="box__install__tutorial">
                <div class="item">
                    <h2>
                        <span><i class="bi bi-download"></i> Faça download e execute o instalador.</span>
                        <div class="download">
                            <a href="./../../../View/assets/msi/Instalador CF.msi" download="Instalador CF-v1.2.0-beta.msi"><i class="bi bi-file-arrow-down-fill"></i> DOWNLOAD v1.2.0-beta</a>
                        </div>
                    </h2>
                    <p>Para fazer o download do instalador do codeflame basta clicar no botão vermelho acima. Após terminar o download do arquivo msi em sua maquina, execute-o dando dois cliques.</p>
                    <img src="./../../../View/assets/img_instalador.png" width="100">
                    <p>Após dar dois clique sobre o executavél msi, irá aparecer a seguinte tela:</p>
                    <img src="./../../../View/assets/img_install_pasta.png" width="650">
                    <p>Mude o local de instalação para <b>[C:\dev\codeflame inc\]</b> exatamente igual a imagem acima para evitar qualquer tipo de erro futuramente. Feito isso, clique em "Avançar".</p>
                    <p>Após isso irá aparecer outra tela, mas você não precisar mudar nada nela, basta clicar em "Avançar" novamente. <span class="destaque">Pronto, seu codeflame foi instalado com sucesso <3<span>
                </div>
                <div class="item">
                    <h2><i class="bi bi-pc-display-horizontal"></i> Configurando a variével de ambiente PATH</h2>
                    <p>Clique na tecla <i class="bi bi-windows"></i>(windows) e busque por <b>"Editar as variáveis de ambiente do sistema"</b>, e clique em abrir, como mostrar abaixo:</p>
                    <img src="./../../../View/assets/img_buscar_path.png" width="650">
                    <p>Depois que você clicou em abrir, irá aparecer uma outra tela e basta você clicar em <b>"Variáveis de Ambiente"</b> como mostra logo abaixo:</p>
                    <img src="./../../../View/assets/img_var_path.png" width="650">
                    <p>Após clicar em <b>"Variáveis de Ambiente"</b>, irá abrir uma tela semelhante a está: </p>
                    <img src="./../../../View/assets/img_path_semifinal.png" width="650">
                    <p><b>IMPORTANTE: </b>Clique em <b>"Path"</b> e depois em <b>"Editar"</b>, como mostra a imagem acima.</p>
                    <p>Logo em seguinda, abrirá uma tela igual está abaixo. Você tem que clicar em <b>"Novo"</b> e depois no espaço onde está marcado preencher com o diretório de instalação do codeflame.</p>
                    <img src="./../../../View/assets/img_path_final.png" width="650">
                    <p><b>ATENÇÃO:</b> Lembre-se que o diretório de instalação que pedimos para você utilizar é <b>[C:\dev\codeflame inc\]</b>. Após fazer tudo isso clique em "Ok" e pode fechar as telas que foram abertas.</p>
                    <p>Se você fez tudo certo abre seu terminal e digite <b>"codeflame --version"</b> seu output deverá ser a versão atual do codeflame.</p>
                </div>
                <div class="btn__cmd">
                    <a href="/commands"><i class="bi bi-terminal-fill"></i> Ver Comandos do Codeflame</a>
                </div>
            </div>
        </section>
    </main>
</body>
</html>