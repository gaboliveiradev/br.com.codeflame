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
        carregarTextoArquivoRotas();
    }

    if(option == "mvc") {
        carregarTextoMVC();
    }
}

function carregarTextoArquivoIndex() {
    title.innerHTML = "Entenda sobre o arquivo <u>index.php</u>";
    elementoAbout.innerHTML = `
        <div class="item">
            <div class="cmd">
                <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
                <p><span class="color__number">2</span> </p>
                <p><span class="color__number">3</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./config.php e colasse aqui.</span></p>
                <p><span class="color__number">4</span> <span class="cor__include">include</span> <span class="cor__texto">"./config.php"</span>; </p>
                <p><span class="color__number">5</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./autoload.php e colasse aqui.</span></p>
                <p><span class="color__number">6</span> <span class="cor__include">include</span> <span class="cor__texto">"./autoload.php"</span>; </p>
                <p><span class="color__number">7</span> <span class="comentario">// Incluindo nosso arquivo config.php no index.php. É a mesma coisa que se eu pegasse o trecho de código do arquivo ./rotas.php e colasse aqui.</span></p>
                <p><span class="color__number">8</span> <span class="cor__include">include</span> <span class="cor__texto">"./rotas.php"</span>; </p>
            </div>
        </div>

        <p>O arquivo index.php é um dos arquivos mais importantes em um site que utiliza a linguagem de programação PHP. Ele é responsável por controlar o fluxo de informações do site, determinando quais páginas serão exibidas aos usuários e como elas serão apresentadas. Geralmente, o arquivo index.php é o primeiro arquivo que o servidor web procura ao acessar um site. É comum que o arquivo index.php contenha o código necessário para inicializar a aplicação web e carregar as configurações iniciais do site. Esse código pode incluir a definição de variáveis de ambiente, a conexão com bancos de dados, a inclusão de outros arquivos PHP e a definição das rotas do site.</p>
        <p>Como vimos no texto sobredito, o index.php é o arquivo mais importante de um site. E nosso framework cria ele fazendo 3 includes dentro dele, ou seja, no nosso arquivo index.php iremos incluir o arquivo config.php, autoload.php e o rotas.php. E também iremos iniciiar nossa session utilizando session_start(); no topo do arquivo. Veja abaixo como fica o arquivo index.php:</p>
        <p>Como podemos ver no código acima, abrimos a tag do php e logo em seguinda inicializamos nossa session com session_start(); e por fim, daremos include em 3 arquivos importantes que se localização no escopo raiz da minha aplicação.</p>
        <p>Atenção, a ordem dos includes tem que ser exatamente igual ao código acima, pois é um efeito cascata. Ou seja, no arquivo de rotas eu necessito do autoload para fazer include automático das classes, e no arquivo autoload eu necessito do arquivo config para acessar minhas constantes.</p>
    `;
}

function carregarTextoArquivoConfig() {
    title.innerHTML = "Entenda sobre o arquivo <u>config.php</u>";
    elementoAbout.innerHTML = `    
        <div class="item">
            <div class="cmd">
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

        <p>O arquivo config.php é um arquivo comumente utilizado em projetos de desenvolvimento web com a linguagem PHP. Ele é responsável por armazenar configurações importantes do site, como por exemplo, a conexão com o banco de dados.</p>
        <p>No exemplo de código apresentado, podemos ver que o arquivo config.php define algumas constantes importantes para a execução do site, como a constante BASEDIR que define o diretório raiz do projeto e a constante VIEWS que define o diretório onde estão armazenados os arquivos de visualização do site.</p>
        <p>Além disso, o arquivo config.php também armazena informações sobre a conexão com o banco de dados. No exemplo apresentado, o arquivo define o endereço do servidor de banco de dados, o usuário e a senha utilizados para acessar o banco de dados, bem como o nome do banco de dados que será utilizado.</p>
        <p>Ao utilizar o arquivo config.php, é possível centralizar todas as configurações importantes do site em um único arquivo, o que facilita o gerenciamento e a manutenção do site a longo prazo. Além disso, a utilização de constantes e variáveis globais definidas no arquivo config.php torna mais fácil a atualização e a customização do site, uma vez que as configurações podem ser facilmente modificadas sem a necessidade de alterar o código fonte em diversas partes do site.</p>
    `;
}

function carregarTextoArquivoAutoload() {
    title.innerHTML = "Entenda sobre o arquivo <u>autoload.php</u>";
    elementoAbout.innerHTML = `    
        <div class="item">
            <div class="cmd">
                <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
                <p><span class="color__number">2</span> <span class="comentario">// Registrando uma função anônima como uma função de autoload, e passando o parametro $class que será preenchido automaticamente com o nome da classe.</span></p>
                <p><span class="color__number">3</span> <span class="amarelo__metodo">spl_autoload_register</span>(<span class="azul__tag__php">function</span> (<span class="cor__var__especial">$class</span>) { </p>
                <p><span class="color__number">4</span> <span class="comentario pl-20">// Atribuindo a minha variável $arq o caminho completo até minha classe, utilizando a constante BASEDIR para funcionar indepentende de onde for hospedado</span></p>
                <p><span class="color__number">5</span> <span class="pl-20"> <span class="cor__var__especial">$arq</span> = BASEDIR . <span class="cor__texto">'/'</span> . <span class="cor__var__especial">$class</span> . <span class="cor__texto">'.php'</span>; </span></p>
                <p><span class="color__number">6</span> </p>
                <p><span class="color__number">7</span> <span class="comentario pl-20">// Verificando se o arquivo existe com o auxilio do metodo nativo file_exists(); Se existir eu dou include, caso contrário eu exibio uma mensagem</span></p>
                <p><span class="color__number">8</span> <span class="pl-20"> <span class="cor__include">if</span>(<span class="amarelo__metodo">file_exists</span>(<span class="cor__var__especial">$arq</span>)) {</span> </p>
                <p><span class="color__number">9</span> <span class="pl-40"><span class="cor__include">include</span> <span class="cor__var__especial">$arq</span>;</span></p>
                <p><span class="color__number pd">10</span> <span class="pl-20">} <span class="cor__include">else</span></span> </p>
                <p><span class="color__number pd">11</span> <span class="pl-40"> <span class="cor__include">exit</span>(<span class="cor__texto">'Arquivo não encontrado. Arquivo: '</span> . <span class="cor__var__especial">$arq</span> . <span class="cor__texto">"&lt;br />"</span>);</span> </p>
                <p><span class="color__number pd">12</span> });</p>
            </div>
        </div>

        <p>O arquivo "autoload.php" é um componente fundamental do ecossistema de desenvolvimento em PHP. Ele é responsável por carregar automaticamente todas as classes e dependências necessárias para o funcionamento de um projeto, evitando a necessidade de importá-las manualmente em cada arquivo.</p>
        <p>Ao utilizar o autoload.php, o desenvolvedor pode se concentrar no desenvolvimento da lógica de negócios sem precisar se preocupar com a importação de cada classe utilizada em cada arquivo. O arquivo autoload.php é gerado automaticamente pelo Codeflame.</p>
        <p>Em resumo, o autoload.php é um recurso muito importante e eficiente para simplificar e agilizar o desenvolvimento em PHP, tornando-o mais produtivo e eficiente. </p>
    `;
}

function carregarTextoArquivoRotas() {
    title.innerHTML = "Entenda sobre o arquivo <u>rotas.php</u>";
    elementoAbout.innerHTML = `
    <div class="item">
        <div class="cmd">
            <p><span class="color__number">1</span> <span class="azul__tag__php">&lt;?php</span></p>
            <p><span class="color__number">2</span> </p>
            <p><span class="color__number">3</span> <span class="comentario">/* Declarando os subnamespace a serem utilizados no switch case. Usamos as {} após a escrita "Controller" para colocar todas as controller que existem <span></p>
            <p><span class="color__number">4</span> <span class="comentario">   dentro de um determinado namespace. No exemplo abaixo, estamos importando o subnamespace WelcomeController que é referente ao namespace Controller. */ <span></p>
            <p><span class="color__number">5</span> <span class="azul__tag__php">use</span> App\\Controller\\{</p>
            <p><span class="color__number">6</span> <span class="pl-20 cor__namespace">WelcomeController</span>,</p>
            <p><span class="color__number">7</span> };</p>
            <p><span class="color__number">8</span> </p>
            <p><span class="color__number">9</span> <span class="comentario">// Obtendo o caminho path da URL de um requisição http e armazenando na variável $parse_uri, para futuruamente direcionar o usuário de acordo com sua URL.</span></p>
            <p><span class="color__number pd">10</span> <span class="cor__var__especial">$parse_uri</span> = <span class="amarelo__metodo">parse_url</span>(<span class="cor__var__especial">$_SERVER</span>[<span class="cor__texto">'REQUEST_URI'</span>], PHP_URL_PATH);</p>
            <p><span class="color__number pd">11</span> </p>
            <p><span class="color__number pd">12</span> <span class="comentario">// Utilizando o switch case para direcionar o usuário para um determinada view ou realizar uma ação de acordo com a rota URL.</span></p>
            <p><span class="color__number pd">13</span> <span class="cor__include">switch</span>(<span class="cor__var__especial">$parse_uri</span>) {</p>
            <p><span class="color__number pd">14</span> </p>
            <p><span class="color__number pd">15</span> <span class="comentario">/* Neste caso, quando o usuário acessar a rota /welcome (https://codeflame.com/welcome) iremos chamar o método index que se encontra dentro da </span></p>
            <p><span class="color__number pd">16</span> <span class="comentario">   nossa classe WelcomeController. Este metodo index, provavelmente é responsável por exibir uma view ao usuário, ou até mesmo realizar uma ação. */</span></p>
            <p><span class="color__number pd">17</span> <span class="pl-20 cor__texto"><span class="cor__include">case</span> "/welcome"</span>:</p>
            <p><span class="color__number pd">18</span> <span class="pl-40"><span class="cor__namespace">WelcomeController</span>::<span class="amarelo__metodo">index</span>();</span></p>
            <p><span class="color__number pd">19</span> <span class="pl-20 cor__include">break</span>;</p>
            <p><span class="color__number pd">20</span> </p>
            <p><span class="color__number pd">21</span> <span class="comentario">// Caso o usuário não acesse nenhuma rota que deixamos pré definida ele cai no bloco default, que neste caso chama a rota /welcome.</span></p>
            <p><span class="color__number pd">22</span> <span class="pl-20 cor__include">default</span>:</p>
            <p><span class="color__number pd">23</span> <span class="pl-40"><span class="amarelo__metodo">header</span>(<span class="cor__texto">"Location: /welcome"</span>);</span></p>
            <p><span class="color__number pd">24</span> <span class="pl-20 cor__include">break</span>;</p>
            <p><span class="color__number pd">25</span> }</p>
        </div>
    </div>
    <p>O arquivo "rotas.php" geralmente é encontrado em frameworks de desenvolvimento web, como o Codeflame, e é utilizado para definir as rotas da aplicação web.</p>
    <p>Em resumo, as rotas determinam qual ação da aplicação será executada quando uma determinada URL é acessada pelo usuário. Quando um usuário acessa uma URL, o servidor web verifica as rotas definidas no arquivo "rotas.php" para descobrir qual controlador e ação devem ser executados para atender à solicitação.</p>
    <p>Em resumo, o arquivo "rotas.php" é uma parte importante do desenvolvimento de aplicativos da web, pois ajuda a gerenciar o fluxo de tráfego na aplicação e a garantir que os usuários sejam direcionados para as páginas corretas.</p>
    `;
}

function carregarTextoMVC() {
    title.innerHTML = "O que é o padrão de projeto MVC?";
    elementoAbout.innerHTML = `
    <p>O padrão de projeto MVC (Model-View-Controller) é uma arquitetura de software comummente utilizada em aplicações web com PHP. Ele é projetado para separar a lógica de negócios da aplicação (Model) da interface do usuário (View) e da lógica de controle (Controller).</p>
    <ul>
        <li>VIEW: A View é responsável pela apresentação dos dados ao usuário final. Ela é a interface do usuário e pode ser composta de vários elementos como formulários, botões, tabelas, gráficos, etc.</li>
        <li>CONTROLLER: O Controller é responsável por coordenar as interações entre o Model e a View. Ele recebe as solicitações do usuário e decide qual Model deve ser usado para atender à solicitação e qual View deve ser renderizada para apresentar a resposta ao usuário.</li>
        <li>MODEL: A camada Model é responsável pela manipulação de dados e pela aplicação das regras de negócio. De maneira geral, é incumbida do transporte dos dados para a próxima camada, a DAO. Além disso, é na camada Model que se realizam as validações, utilizando-se as conhecidas estruturas de tratamento de exceções try-catch.</li>
        <li>DAO: A camada DAO é responsável por realizar consultas junto ao banco de dados. Nesta camada, é estabelecida a conexão com o SGBD e executada uma ou várias consultas por meio de métodos próprios. Em muitos casos, utilizamos o objeto Model como parâmetro desses métodos, uma vez que ele contém como propriedades os campos correspondentes da base de dados.</li>
    </ul>
    <p>A principal vantagem do padrão de projeto MVC é a separação de responsabilidades entre as diferentes camadas da aplicação. Isso permite uma manutenção mais fácil e uma escalabilidade maior do aplicativo. Além disso, o MVC ajuda a promover a reutilização de código e facilita o teste automatizado do aplicativo.</p>
    <p>Em resumo, o padrão de projeto MVC em PHP é uma abordagem que divide o código em três camadas principais, cada uma com uma responsabilidade específica: o Modelo (lógica de negócios e manipulação de dados), a Visão (interface do usuário) e o Controlador (gerencia a interação entre a Visão e o Modelo).</p>
    <p>Em linhas gerais, a camada View é responsável por armazenar as interfaces gráficas. A camada Controller, por sua vez, é responsável por apresentar a view ao usuário e, se necessário, acionar métodos da respectiva Model. Esta, por sua vez, tem como função transportar os dados para a próxima camada - a DAO - que, por sua vez, é responsável por realizar as consultas no banco de dados.</p>
    <p>Cabe destacar que cada camada é correspondente a uma entidade do banco de dados. Por exemplo, supondo que haja a entidade "Usuário", então é provável que se tenha as camadas "UsuarioController", "UsuarioModel" e "UsuarioDAO". É importante frisar que, no caso da Model, esta atua como uma camada de transporte e, portanto, tem como propriedades os atributos da referida entidade do banco de dados, como no exemplo de "Usuario".</p>
    `;
}