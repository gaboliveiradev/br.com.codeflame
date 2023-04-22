var listItem = document.querySelectorAll('ol > li > a');

var title = document.querySelector('.title__documentation > h2');
var elementoAbout = document.querySelector('.about');

carregarTextoArquivoIndex();

for(var i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', (e)=>{
        e.preventDefault();

        carregarTexto(e.target.getAttribute('name'));
    });
}

function carregarTexto(option) {
    if(option == "index.php") {
        carregarTextoArquivoIndex();
    }

    if(option == "config.php") {
        carregarTextoArquivoConfig();
    }

    if(option == "autoload.php") {
        carregarTextoArquivoAutoload();
    }

    if(option == "rotas.php") {
        title.innerHTML = "arquivo-raiz\\rotas.php";
    }
}

function carregarTextoArquivoIndex() {
    title.innerHTML = "arquivo-raiz\\index.php";
    elementoAbout.innerHTML = `
        <p>O arquivo <b>index.php</b> é um dos arquivos mais importantes em um site que utiliza a linguagem de programação PHP. Ele é responsável por controlar o fluxo de informações do site, determinando quais páginas serão exibidas aos usuários e como elas serão apresentadas. Geralmente, o arquivo <b>index.php</b> é o primeiro arquivo que o servidor web procura ao acessar um site. É comum que o arquivo <b>index.php</b> contenha o código necessário para inicializar a aplicação web e carregar as configurações iniciais do site. Esse código pode incluir a definição de variáveis de ambiente, a conexão com bancos de dados, a inclusão de outros arquivos PHP e a definição das rotas do site.</p>
        <p>Como vimos no texto sobredito, o <b>index.php</b> é o arquivo mais importante de um site. E nosso framework cria ele fazendo 3 includes dentro dele, ou seja, no nosso arquivo <b>index.php</b> iremos incluir o arquivo <b>config.php, autoload.php e o rotas.php</b>. E também iremos iniciiar nossa session utilizando <b>session_start();</b> no topo do arquivo. Veja abaixo como fica o arquivo index.php:</p>
        <div class="item">
            <div class="cmd" name="all-commands">
                <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
                <p><span class="color__number">2</span> <span class="comentario">// Inicializando minha váriavel de sessão, veja mais sobre isso em: [https://www.php.net/manual/en/reserved.variables.session.php]</span></p>
                <p><span class="color__number">3</span> <span class="amarelo__metodo">session_start</span>(); </p>
                <p><span class="color__number">4</span> </p>
                <p><span class="color__number">5</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./config.php e colasse aqui.</span></p>
                <p><span class="color__number">6</span> <span class="cor__include">include</span> <span class="cor__texto">"./config.php"</span>; </p>
                <p><span class="color__number">7</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./autoload.php e colasse aqui.</span></p>
                <p><span class="color__number">8</span> <span class="cor__include">include</span> <span class="cor__texto">"./autoload.php"</span>; </p>
                <p><span class="color__number">9</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./rotas.php e colasse aqui.</span></p>
                <p><span class="color__number pd">10</span> <span class="cor__include">include</span> <span class="cor__texto">"./rotas.php"</span>; </p>
            </div>
        </div>

        <p>Como podemos ver na imagem acima, abrimos a tag do php e logo em seguinda inicializamos nossa session com <b>session_start();</b> e por fim, daremos include em 3 arquivos importantes que se localização no escopo raiz da minha aplicação.</p>
        <p>Atenção, a ordem dos includes tem que ser exatamente igual a da imagem, pois é um efeito cascata. Ou seja, no arquivo de rotas eu necessito do autoload para fazer include automático das classes, e no arquivo autoload eu necessito do arquivo config para acessar minhas constantes.</p>
    `;
}

function carregarTextoArquivoConfig() {
    title.innerHTML = "arquivo-raiz\\config.php";
    elementoAbout.innerHTML = `
        <p>O arquivo config.php é um arquivo comumente utilizado em projetos de desenvolvimento web com a linguagem PHP. Ele é responsável por armazenar configurações importantes do site, como por exemplo, a conexão com o banco de dados.</p>
        <p>No exemplo de código apresentado, podemos ver que o arquivo config.php define algumas constantes importantes para a execução do site, como a constante BASEDIR que define o diretório raiz do projeto e a constante VIEWS que define o diretório onde estão armazenados os arquivos de visualização do site.</p>
        <p>Além disso, o arquivo config.php também armazena informações sobre a conexão com o banco de dados. No exemplo apresentado, o arquivo define o endereço do servidor de banco de dados, o usuário e a senha utilizados para acessar o banco de dados, bem como o nome do banco de dados que será utilizado.</p>
        
        <div class="item" id="cmd6">
            <div class="cmd" name="all-commands">
                <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
                <p><span class="color__number">2</span> <span class="comentario">// Definindo na constante 'BASEDIR' o diretório raiz da aplicação.</span></p>
                <p><span class="color__number">3</span> <span class="amarelo__metodo">define</span>(<span class="cor__texto">'BASEDIR'</span>, <span class="amarelo__metodo">dirname</span>(<span class="azul__tag__php">__FILE__</span>, <span class="amarelo__metodo">2</span>));</p>
                <p><span class="color__number">4</span> <span class="comentario">// Definindo na constante 'VIEWS' o diretório onde vai ficar todas minhas páginas a serem exibidas.</span></p>
                <p><span class="color__number">5</span> <span class="amarelo__metodo">define</span>(<span class="cor__texto">"'VIEWS'</span>, BASEDIR . <span class="cor__texto">'/View/modules/'</span>);</p>
                <p><span class="color__number">6</span> </p>
                <p><span class="color__number">7</span> <span class="comentario">// Definindo na minha variável super global no indice db e host, o host do meu servidor SGBD com a porta.</span></p>
                <p><span class="color__number">8</span> <span class="cor__var__especial">$_ENV</span>[<span class="cor__texto">'db'</span>][<span class="cor__texto">'host'</span>] = <span class="cor__texto">"localhost:3307"</span>;</p>
                <p><span class="color__number">9</span> <span class="comentario">// Definindo na minha variável super global no indice db e user, o usuário do meu servidor SGBD.</span></p>
                <p><span class="color__number pd">10</span> <span class="cor__var__especial">$_ENV</span>[<span class="cor__texto">'db'</span>][<span class="cor__texto">'user'</span>] = <span class="cor__texto">"root"</span>;</p>
                <p><span class="color__number pd">11</span> <span class="comentario">// Definindo na minha variável super global no indice db e pass, a senha do usuário do meu servidor SGBD.</span></p>
                <p><span class="color__number pd">12</span> <span class="cor__var__especial">$_ENV</span>[<span class="cor__texto">'db'</span>][<span class="cor__texto">'pass'</span>] = <span class="cor__texto">"codeflamepwd"</span>;</p>
                <p><span class="color__number pd">13</span> <span class="comentario">// Definindo na minha variável super global no indice db e dbname, o nome do banco de dados que irei utilizar.</span></p>
                <p><span class="color__number pd">14</span> <span class="cor__var__especial">$_ENV</span>[<span class="cor__texto">'db'</span>][<span class="cor__texto">'dbname'</span>] = <span class="cor__texto">"db_teste"</span>;</p>
            </div>
        </div>

        <p>Ao utilizar o arquivo config.php, é possível centralizar todas as configurações importantes do site em um único arquivo, o que facilita o gerenciamento e a manutenção do site a longo prazo. Além disso, a utilização de constantes e variáveis globais definidas no arquivo config.php torna mais fácil a atualização e a customização do site, uma vez que as configurações podem ser facilmente modificadas sem a necessidade de alterar o código fonte em diversas partes do site.</p>
    `;
}

function carregarTextoArquivoAutoload() {
    title.innerHTML = "arquivo-raiz\\autoload.php";
    elementoAbout.innerHTML = `
        <p>O arquivo "autoload.php" é um componente fundamental do ecossistema de desenvolvimento em PHP. Ele é responsável por carregar automaticamente todas as classes e dependências necessárias para o funcionamento de um projeto, evitando a necessidade de importá-las manualmente em cada arquivo.</p>
        <p>Ao utilizar o autoload.php, o desenvolvedor pode se concentrar no desenvolvimento da lógica de negócios sem precisar se preocupar com a importação de cada classe utilizada em cada arquivo. O arquivo autoload.php é gerado automaticamente pelo Codeflame.</p>
        <p>Em resumo, o autoload.php é um recurso muito importante e eficiente para simplificar e agilizar o desenvolvimento em PHP, tornando-o mais produtivo e eficiente. </p>
        
        <div class="item" id="cmd6">
            <div class="cmd" name="all-commands">
                <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
                <p><span class="color__number">1</span> <span class="comentario">// Registrando uma função anônima como uma função de autoload, e passando o parametro $class que será preenchido automaticamente com o nome da classe.</span></p>
                <p><span class="color__number">2</span> <span class="amarelo__metodo">spl_autoload_register</span>(<span class="azul__tag__php">function</span> (<span class="cor__var__especial">$class</span>) { </p>
                <p><span class="color__number">2</span> <span class="comentario pl-20">// Atribuindo a minha variável $arq o caminho completo até minha classe, utilizando a constante BASEDIR para funcionar indepentende de onde for hospedado</span></p>
                <p><span class="color__number">3</span> <span class="pl-20"> <span class="cor__var__especial">$arq</span> = BASEDIR . <span class="cor__texto">'/'</span> . <span class="cor__var__especial">$class</span> . <span class="cor__texto">'.php'</span>; </span></p>
                <p><span class="color__number">3</span> </p>
                <p><span class="color__number">3</span> <span class="comentario pl-20">// Verificando se o arquivo existe com o auxilio do metodo nativo file_exists(); Se existir eu dou include, caso contrário eu exibio uma mensagem</span></p>
                <p><span class="color__number">4</span> <span class="pl-20"> <span class="cor__include">if</span>(<span class="amarelo__metodo">file_exists</span>(<span class="cor__var__especial">$arq</span>)) {</span> </p>
                <p><span class="color__number">5</span> <span class="pl-40"><span class="cor__include">include</span> <span class="cor__var__especial">$arq</span>;</span></p>
                <p><span class="color__number">6</span> <span class="pl-20">} <span class="cor__include">else</span></span> </p>
                <p><span class="color__number">7</span> <span class="pl-40"> <span class="cor__include">exit</span>(<span class="cor__texto">'Arquivo não encontrado. Arquivo: '</span> . <span class="cor__var__especial">$arq</span> . <span class="cor__texto">"&lt;br />"</span>);</span> </p>
                <p><span class="color__number">8</span> });</p>
            </div>
        </div>
    `;
}