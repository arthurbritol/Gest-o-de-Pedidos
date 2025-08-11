const usuarios = {
    "admin": "1234",
    "operador1": "1234",
    "operador2": "1234",
    "operador3": "1234",
    "carregador1": "1234",
    "carregador2": "1234",
    "carregador3": "1234",
    "joao": "1234"
};

let pedidos = [
    { id: 10532, cliente: "Metalúrgica Central", status: "Aguardando separação", endereco: "Rua teste, 123 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/8", "CHAPA GALVANIZADA", "CHAPA INOX 304"], Tubo: ["TUBO RETANGULAR 40x20", "TUBO REDONDO 1 1/2", "TUBO QUADRADO 20x20"], Viga: ["VIGA U 1/4", "VIGA I 200"] } },
    { id: 10533, cliente: "Construtora Brasil", status: "Aguardando separação", endereco: "Av. Exemplo, 456 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA 3/16", "CHAPA XADREZ 1/4"], Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 40"] } },
    { id: 10534, cliente: "Ferro e Aço LTDA", status: "Aguardando separação", endereco: "Rua das Indústrias, 1010 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA W 2", "VIGA H 150"], Chapa: ["CHAPA XADREZ 5/16", "CHAPA LISA 1/2"], Tubo: ["TUBO QUADRADO 50x50", "TUBO REDONDO 3"] } },
    { id: 10535, cliente: "ConstruAço", status: "Aguardando separação", endereco: "Rodovia Norte-Sul, 999 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 50x50", "TUBO RETANGULAR 60x40", "TUBO CONDUITE 3/4"], Viga: ["VIGA H 200", "VIGA U 5", "VIGA LAMINADA 150"] } },
    { id: 10536, cliente: "Montagens Gerais", status: "Aguardando separação", endereco: "Rua Projetada, 789 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/4", "CHAPA FINO QUENTE 1/8", "CHAPA DE PISO ALUMÍNIO"], Tubo: ["TUBO INDUSTRIAL 3", "TUBO INOX SANITÁRIO"], Viga: ["VIGA I 300", "VIGA SOLDADA 250", "VIGA LAMINADA 200"] } },
    { id: 10537, cliente: "Aço Forte", status: "Aguardando separação", endereco: "Av. Atlântica, 321 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA ALUMÍNIO 2mm", "CHAPA GALVANIZADA TRAPEZOIDAL"], Viga: ["VIGA SOLDADA 600", "VIGA WIDE FLANGE 800"] } },
    { id: 10538, cliente: "Metal Capixaba", status: "Aguardando separação", endereco: "Rua dos Ferroviários, 12 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Tubo: ["TUBO ZINCADO 1", "TUBO ESTRUTURAL 100x100"], Viga: ["VIGA SOLDADA 200", "VIGA I 150"] } },
    { id: 10539, cliente: "Engemetal", status: "Aguardando separação", endereco: "Rua Industrial, 88 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA LISA 1/2", "CHAPA CORTEN 3mm"], Tubo: ["TUBO REDONDO 3", "TUBO ELETRODUTO 1"] } },
    { id: 10540, cliente: "Ferroleste", status: "Aguardando separação", endereco: "Avenida Norte, 999 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA U 5", "VIGA METÁLICA TRELIÇADA"], Chapa: ["CHAPA ANTIDERRAPANTE", "CHAPA EXPANDIDA ALUMÍNIO"] } },
    { id: 10541, cliente: "Metalúrgica União", status: "Aguardando separação", endereco: "Rod. do Contorno, 400 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 40x40", "TUBO RETANGULAR 80x40", "TUBO DE CONDUÇÃO 2"], Chapa: ["CHAPA GALVANIZADA", "CHAPA PERFURADA 3mm"] } },
    { id: 10542, cliente: "Construmetais", status: "Aguardando separação", endereco: "Rua das Oficinas, 77 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA I 250", "VIGA U 6"], Chapa: ["CHAPA LISA 3/8", "CHAPA DE AÇO CARBONO", "CHAPA DE LIGA LEVE"] } },
    { id: 10543, cliente: "Alfa Engenharia", status: "Aguardando separação", endereco: "Rua das Palmeiras, 10 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1 1/2", "TUBO DE PRECISÃO", "TUBO OVAL"], Chapa: ["CHAPA EXPANDIDA", "CHAPA DE LATÃO"] } },
    { id: 10544, cliente: "Beta Construções", status: "Aguardando separação", endereco: "Av. Beira Mar, 2000 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA U 3", "VIGA DE ALUMÍNIO"], Chapa: ["CHAPA LISA 1/4", "CHAPA DE CHUMBO"] } },
    { id: 10545, cliente: "Gama Ferragens", status: "Aguardando separação", endereco: "Rua do Comércio, 50 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA", "CHAPA FRISADA"], Tubo: ["TUBO RETANGULAR 20x10", "TUBO INDUSTRIAL 4", "TUBO COM COSTURA"] } },
    { id: 10546, cliente: "Delta Estruturas", status: "Aguardando separação", endereco: "BR-101 Sul, KM 25 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 150", "VIGA I 100"], Chapa: ["CHAPA PRETA 3/16", "CHAPA GROSSA 1/2"] } },
    { id: 10547, cliente: "Épsilon Indústria", status: "Aguardando separação", endereco: "Av. Central, 300 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 3/4", "TUBO DE COBRE 1/2"], Chapa: ["CHAPA INOX 1mm", "CHAPA ESCOVADA"] } },
    { id: 10548, cliente: "Zeta Metalúrgica", status: "Aguardando separação", endereco: "Rua Norte, 15 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA I 100", "VIGA W 3"], Tubo: ["TUBO QUADRADO 30x30", "TUBO RETANGULAR 50x25"] } },
    { id: 10549, cliente: "Ômega Comércio", status: "Aguardando separação", endereco: "Praça da Matriz, 7 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PERFURADA", "CHAPA DE ZINCO"], Viga: ["VIGA SOLDADA 400", "VIGA DE TRELIÇA"] } },
    { id: 10550, cliente: "Ícaro Soldas", status: "Aguardando separação", endereco: "Rua da Paz, 123 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Tubo: ["TUBO INDUSTRIAL 2", "TUBO REDONDO 5"], Chapa: ["CHAPA FINA FRIA", "CHAPA CROMADA"] } },
    { id: 10551, cliente: "Fênix Construções", status: "Aguardando separação", endereco: "Av. da República, 500 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Viga: ["VIGA W 4", "VIGA PRÉ-MOLDADA"], Tubo: ["TUBO PVC 100mm", "TUBO ESGOTO 150mm"] } },
    { id: 10552, cliente: "Grifo Metais", status: "Aguardando separação", endereco: "Rua do Sol, 888 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA POLICARBONATO", "CHAPA ACRÍLICA"], Viga: ["VIGA LAMINADA 200", "VIGA DE CONCRETO PRÉ-FABRICADO"] } },
    { id: 10553, cliente: "Draco Montagens", status: "Aguardando separação", endereco: "Rodovia do Café, KM 5 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO OBLONGO", "TUBO DE VENTILAÇÃO"], Chapa: ["CHAPA GALVANIZADA", "CHAPA DE COBRE"] } },
    { id: 10554, cliente: "Pegasus Engenharia", status: "Aguardando separação", endereco: "Rua das Rosas, 77 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Viga: ["VIGA CAIXÃO", "VIGA DE MADEIRA LAMINADA"], Tubo: ["TUBO DE AÇO INOX", "TUBO DE ALUMÍNIO"] } },
    { id: 10555, cliente: "Centauro Indústria", status: "Aguardando separação", endereco: "Av. Brasil, 1100 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Chapa: ["CHAPA DE COBRE", "CHAPA DE BRONZE"], Viga: ["VIGA U 8", "VIGA H 250"] } },
    { id: 10556, cliente: "Harpia Estruturas", status: "Aguardando separação", endereco: "Rua da Serra, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Tubo: ["TUBO SCH 40", "TUBO DE FERRO FUNDIDO"], Chapa: ["CHAPA GROSSA", "CHAPA DE TITÂNIO"] } },
    { id: 10557, cliente: "Minotauro Construções", status: "Aguardando separação", endereco: "Estrada Velha, 22 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA I 400", "VIGA WIDE FLANGE 600"], Tubo: ["TUBO SEM COSTURA", "TUBO COM FLANGE"] } },
    { id: 10558, cliente: "Sereia Naval", status: "Aguardando separação", endereco: "Rua do Porto, 33 - Vitória, ES", embarque: "Vitória", motorista: null, produtos: { Chapa: ["CHAPA NAVAL", "CHAPA DE AÇO MARÍTIMO"], Viga: ["VIGA CAIXÃO GRANDE", "VIGA GERAL"] } },
    { id: 10559, cliente: "Tritão Ferro e Aço", status: "Aguardando separação", endereco: "Av. dos Navegantes, 150 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 100x100", "TUBO RETANGULAR 120x60"], Chapa: ["CHAPA DE PISO", "CHAPA ANTI-ABRASIVA"] } },
    { id: 10560, cliente: "Atlas Construções", status: "Aguardando separação", endereco: "Rua Principal, 55 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Viga: ["VIGA H 300", "VIGA DE PONTE"], Chapa: ["CHAPA CORTEN", "CHAPA DE PAREDE"] } },
    { id: 10561, cliente: "Titã Fundições", status: "Aguardando separação", endereco: "Rodovia das Árvores, 99 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Chapa: ["CHAPA DE BRONZE", "CHAPA DE LIGA METÁLICA"], Tubo: ["TUBO FUNDIDO", "TUBO DE CONCRETO"] } },
    { id: 10562, cliente: "Olimpo Metais", status: "Aguardando separação", endereco: "Av. do Contorno, 1001 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Viga: ["VIGA LAMINADA 300", "VIGA ARMADA"], Chapa: ["CHAPA DE CHUMBO", "CHAPA DE ALUMÍNIO COMPOSTO"] } },
    { id: 10563, cliente: "União Metálica", status: "Aguardando separação", endereco: "Rua das Flores, 45 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA PRETA 1/2", "CHAPA GALVANIZADA 2mm"], Tubo: ["TUBO REDONDO 4", "TUBO QUADRADO 70x70"], Viga: ["VIGA I 350", "VIGA U 10"] } },
    { id: 10564, cliente: "Expresso Cargas", status: "Aguardando separação", endereco: "BR-101 Norte, KM 50 - Aracruz, ES", embarque: "Aracruz", motorista: null, produtos: { Tubo: ["TUBO RETANGULAR 50x30", "TUBO ZINCADO 2"], Viga: ["VIGA H 220", "VIGA LAMINADA 250"] } },
    { id: 10565, cliente: "Soluções em Aço", status: "Aguardando separação", endereco: "Rua do Progresso, 200 - Guarapari, ES", embarque: "Guarapari", motorista: null, produtos: { Chapa: ["CHAPA INOX 430", "CHAPA XADREZ 3/8"], Viga: ["VIGA CAIXÃO PEQUENA"] } },
    { id: 10566, cliente: "Estrutura Forte", status: "Aguardando separação", endereco: "Av. das Américas, 100 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 5"], Chapa: ["CHAPA PRETA 1/8"] } },
    { id: 10567, cliente: "Cia. do Metal", status: "Aguardando separação", endereco: "Rua das Acácias, 10 - São Mateus, ES", embarque: "São Mateus", motorista: null, produtos: { Viga: ["VIGA U 4", "VIGA I 120"], Chapa: ["CHAPA GALVANIZADA 1mm"] } },
    { id: 10568, cliente: "Norte Aço", status: "Aguardando separação", endereco: "Rodovia ES-010, KM 5 - Fundão, ES", embarque: "Fundão", motorista: null, produtos: { Tubo: ["TUBO QUADRADO 60x60"], Chapa: ["CHAPA FINA FRIA 0.5mm", "CHAPA DE BRONZE"] } },
    { id: 10569, cliente: "Leste Ferro", status: "Aguardando separação", endereco: "Rua Central, 30 - Cachoeiro de Itapemirim, ES", embarque: "Cachoeiro de Itapemirim", motorista: null, produtos: { Viga: ["VIGA H 100"], Chapa: ["CHAPA ANTIDERRAPANTE 3mm"] } },
    { id: 10570, cliente: "Centro Metal", status: "Aguardando separação", endereco: "Av. Getúlio Vargas, 15 - Castelo, ES", embarque: "Castelo", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2 1/2", "TUBO ESTRUTURAL 80x80"], Chapa: ["CHAPA LISA 1/8", "CHAPA PERFURADA 5mm"] } },
    { id: 10571, cliente: "Metalúrgica do Aço", status: "Aguardando separação", endereco: "Rua do Sol, 10 - Serra, ES", embarque: "Serra", motorista: null, produtos: { Chapa: ["CHAPA 1/4", "CHAPA INOX 316"], Viga: ["VIGA I 100"] } },
    { id: 10572, cliente: "Construções Modernas", status: "Aguardando separação", endereco: "Av. da Praia, 50 - Vila Velha, ES", embarque: "Vila Velha", motorista: null, produtos: { Tubo: ["TUBO REDONDO 1", "TUBO INDUSTRIAL 2"], Chapa: ["CHAPA GALVANIZADA 3mm"] } },
    { id: 10573, cliente: "Estruturas Metálicas", status: "Aguardando separação", endereco: "Rua da Paz, 200 - Cariacica, ES", embarque: "Cariacica", motorista: null, produtos: { Viga: ["VIGA U 6", "VIGA H 200"], Tubo: ["TUBO QUADRADO 30x30"] } },
    { id: 10574, cliente: "Galvanização Brasil", status: "Aguardando separação", endereco: "Rodovia do Ferro, 700 - Linhares, ES", embarque: "Linhares", motorista: null, produtos: { Chapa: ["CHAPA GALVANIZADA 1/2"], Tubo: ["TUBO RETANGULAR 40x20"] } },
    { id: 10575, cliente: "Tubos e Conexões", status: "Aguardando separação", endereco: "Rua do Comércio, 120 - Colatina, ES", embarque: "Colatina", motorista: null, produtos: { Tubo: ["TUBO REDONDO 2", "TUBO SCHEDULE 80"], Viga: ["VIGA I 200"] } }
];

let usuarioLogado = null;
let isMotoristaLogado = false;

const localStorageDadosPesoKey = "dadosPesagemGlobal";
const localStorageCertificadoKey = "dadosCertificadoGlobal";
const localStorageSetorEnviadoKey = "pedidoEnviadoPorSetor";
const localStoragePedidoStatusKey = "pedidoStatus";
const localStoragePedidoCarregadoKey = "pedidoCarregadoStatus";
const localStorageObservacaoCarregamentoKey = "observacaoCarregamento";
const localStoragePedidoMotoristaKey = "pedidoMotoristaDestino"; 

let globalFiltroPedido = "";
let globalFiltroRota = "todas";
let globalFiltroStatus = "todas";
let pedidoUnicoVisualizado = null;

let previousGlobalFiltroRota = "todas";
let previousGlobalFiltroStatus = "todas";

let globalFiltroMaterial = "Todos";


let globalFiltroCarregamento = "todos"; 
let globalFiltroMotoristaDestino = null; 

function getPedidoStatus(id) {
    return localStorage.getItem(`${localStoragePedidoStatusKey}_${id}`) ||
        (pedidos.find(p => p.id === id) ? pedidos.find(p => p.id === id).status : "Aguardando separação");
}

function setPedidoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoStatusKey}_${id}`, status);

    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].status = status;
    }

    if (document.getElementById("filterScreen").style.display === "flex") {
        exibirResumoEmbarques();
    }
    if (document.getElementById("mainApp").style.display === "block") {
        renderizarPedidosPorSetor(pedidoUnicoVisualizado);
        exibirCotasPorEmbarque(pedidoUnicoVisualizado);
    }
    if (document.getElementById("loaderOrdersScreen").style.display === "flex") {
        renderizarPedidosCarregamento();
    }
}

function getPedidoCarregadoStatus(id) {
    return localStorage.getItem(`${localStoragePedidoCarregadoKey}_${id}`) || "pendente";
}

function setPedidoCarregadoStatus(id, status) {
    localStorage.setItem(`${localStoragePedidoCarregadoKey}_${id}`, status);
    renderizarPedidosCarregamento();
}

function getObservacaoCarregamento(id) {
    return localStorage.getItem(`${localStorageObservacaoCarregamentoKey}_${id}`) || "";
}

function setObservacaoCarregamento(id, observacao) {
    localStorage.setItem(`${localStorageObservacaoCarregamentoKey}_${id}`, observacao);
}

function getPedidoMotoristaDestino(id) {
    const pedido = pedidos.find(p => p.id === id);
    return localStorage.getItem(`${localStoragePedidoMotoristaKey}_${id}`) || (pedido ? pedido.motorista : null);
}

function setPedidoMotoristaDestino(id, motorista) {
    localStorage.setItem(`${localStoragePedidoMotoristaKey}_${id}`, motorista);
    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex !== -1) {
        pedidos[pedidoIndex].motorista = motorista; 
    }
    renderizarPedidosCarregamento();
}


function getDadosPesoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageDadosPesoKey}_${id}`)) || {};
}

function setDadosPesoPedido(id, dados) {
    localStorage.setItem(`${localStorageDadosPesoKey}_${id}`, JSON.stringify(dados));
}

function getDadosCertificadoPedido(id) {
    return JSON.parse(localStorage.getItem(`${localStorageCertificadoKey}_${id}`)) || {};
}

function setDadosCertificadoPedido(id, dados) {
    localStorage.setItem(`${localStorageCertificadoKey}_${id}`, JSON.stringify(dados));
}


function isSetorEnviado(id, setor) {
    return localStorage.getItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`) === "true";
}

function setSetorEnviado(id, setor) {
    localStorage.setItem(`${localStorageSetorEnviadoKey}_${id}_${setor.toLowerCase()}`, "true");
}

function verificarTodosSetoresEnviados(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        return false;
    }

    for (const setor in pedido.produtos) {
        if (Object.prototype.hasOwnProperty.call(pedido.produtos, setor)) {
            if (!isSetorEnviado(pedidoId, setor)) {
                return false;
            }
        }
    }
    return true;
}


function showUserSelectionPage() {
    document.getElementById("userSelectionPage").style.display = "flex";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("driverLoginPage").style.display = "none";
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("materialSelectionPage").style.display = "none";
    document.getElementById("loaderOrdersScreen").style.display = "none"; 
    isMotoristaLogado = false;
    selectedUserType = null;
}

let selectedUserType = null;
let selectedMaterialType = null;


function selectUserType(type) {
    selectedUserType = type;
    document.querySelectorAll('#userSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`#userSelectionPage .user-option[data-user-type="${type}"]`).classList.add('selected');
}


function continueToNextScreen() {
    if (selectedUserType === 'operador') {
        showOperatorLoginPage();
    } else if (selectedUserType === 'motorista') {
        showDriverLoginPage();
    } else {
        showModal("Atenção", "Por favor, selecione seu tipo de serviço para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
    }
}


function showUserSelectionPage() {
    hideAllScreens();
    document.getElementById("userSelectionPage").style.display = "flex";
}

function showOperatorLoginPage() {
    hideAllScreens();
    document.getElementById("loginPage").style.display = "flex";
}

function showDriverLoginPage() {
    hideAllScreens();
    document.getElementById("driverLoginPage").style.display = "flex";
}

function showMaterialSelectionPage() {
    hideAllScreens();
    document.getElementById("materialSelectionPage").style.display = "flex";
    selectedMaterialType = null;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
}

function showFilterScreen() {
    hideAllScreens();
    document.getElementById("filterScreen").style.display = "flex";
}

function showMainApp() {
    hideAllScreens();
    document.getElementById("mainApp").style.display = "block";
}

function hideAllScreens() {
    document.getElementById("userSelectionPage").style.display = "none";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("driverLoginPage").style.display = "none";
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("materialSelectionPage").style.display = "none";
    const rolePage = document.getElementById("operatorRoleSelectionPage");
    if (rolePage) rolePage.style.display = "none";
    const loaderPage = document.getElementById("loaderOrdersScreen");
    if (loaderPage) loaderPage.style.display = "none";
}

function fazerLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const erro = document.getElementById("loginErro");

    const userIsOperator = ["admin", "operador1", "operador2", "operador3", "joao"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsOperator) {
        usuarioLogado = user;
        isMotoristaLogado = false;
        document.getElementById("loginPage").style.display = "none";

        if (usuarioLogado === "admin") {
            document.getElementById("resetDataButton").style.display = "block";
        } else {
            document.getElementById("resetDataButton").style.display = "none";
        }

        exibirResumoEmbarques();
        showFilterScreen();
        showMaterialSelectionPage();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um operador.";
    }
}

function fazerLoginMotorista() {
    const user = document.getElementById("driverUsername").value.trim();
    const pass = document.getElementById("driverPassword").value.trim();
    const erro = document.getElementById("driverLoginErro");

    const userIsDriver = ["carregador1", "carregador2", "carregador3"].includes(user);

    if (usuarios[user] && usuarios[user] === pass && userIsDriver) {
        usuarioLogado = user;
        isMotoristaLogado = true;
        document.getElementById("driverLoginPage").style.display = "none";
        document.getElementById("resetDataButton").style.display = "none";
        showLoadingOrdersScreen();
    } else {
        erro.textContent = "Usuário ou senha incorretos ou não é um Operador de Carregamento.";
    }
}


function selectMaterialType(type) {
    selectedMaterialType = type;
    document.querySelectorAll('#materialSelectionPage .user-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`#materialSelectionPage .user-option[data-material-type="${type}"]`).classList.add('selected');
}

function continueToFilterScreen() {
    if (!selectedMaterialType) {
        showModal("Atenção", "Por favor, selecione um tipo de material para continuar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    globalFiltroMaterial = selectedMaterialType;
    document.getElementById("materialSelectionPage").style.display = "none";
    showFilterScreen();
}


window.onload = showUserSelectionPage;

function showMainAppScreen() {
    document.getElementById("filterScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("welcomeMessage").textContent = `Bem-vindo, ${usuarioLogado}!`;
    document.getElementById("mainAppStatusFilters").style.display = isMotoristaLogado ? "none" : "flex";
    document.getElementById("backToAllOrdersButton").style.display = (pedidoUnicoVisualizado !== null) ? "block" : "none";


    renderizarPedidosPorSetor(pedidoUnicoVisualizado);

    const statusButtons = document.querySelectorAll('#mainAppStatusFilters button');
    statusButtons.forEach(button => {
        if (button.dataset.statusFilter === globalFiltroStatus) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

}

function showFilterScreen() {
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("filterScreen").style.display = "flex";
    exibirResumoEmbarques();
    document.getElementById("backToAllOrdersButton").style.display = "none";
    document.getElementById("quotationsByEmbarque").style.display = "none";

    const summaryTitle = document.querySelector("#filterScreen h2");
    summaryTitle.textContent = isMotoristaLogado ? `Olá, ${usuarioLogado.toUpperCase()}!` : "Visualizar Pedidos";
}

function logout() {
    usuarioLogado = null;
    selectedUserType = null;
    isMotoristaLogado = false;
    globalFiltroPedido = "";
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    globalFiltroMaterial = "Todos";
    selectedMaterialType = null;
    pedidoUnicoVisualizado = null;
    globalFiltroCarregamento = "todos"; 
    globalFiltroMotoristaDestino = null; 
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginErro").textContent = "";
    document.getElementById("driverUsername").value = "";
    document.getElementById("driverPassword").value = "";
    document.getElementById("driverLoginErro").textContent = "";
    showUserSelectionPage();
}


function renderizarPedidosPorSetor(idPedidoEspecifico = null) {
    const pedidosPorSetorDiv = document.getElementById("pedidosPorSetor");
    pedidosPorSetorDiv.innerHTML = "";

    let pedidosFiltrados = pedidos.filter(pedido => {
        const statusCorresponde = globalFiltroStatus === "todas" || getPedidoStatus(pedido.id) === globalFiltroStatus;
        const rotaCorresponde = globalFiltroRota === "todas" || pedido.embarque === globalFiltroRota;
        const pedidoCorresponde = !idPedidoEspecifico || pedido.id === idPedidoEspecifico;

        const pertenceAoOperador = ["admin", "operador1", "operador2", "operador3", "joao"].includes(usuarioLogado.toLowerCase());

        const materialCorresponde = globalFiltroMaterial === "Todos" ||
            (globalFiltroMaterial === "Chapa" && pedido.produtos["Chapa"]) ||
            (globalFiltroMaterial === "Viga" && pedido.produtos["Viga"]) ||
            (globalFiltroMaterial === "Tubo" && pedido.produtos["Tubo"]);

        return statusCorresponde && rotaCorresponde && pedidoCorresponde && pertenceAoOperador && materialCorresponde;
    });

    if (pedidosFiltrados.length === 0) {
        pedidosPorSetorDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary); padding: 20px;'>Nenhum pedido encontrado com os filtros aplicados.</p>";
        return;
    }

    pedidosFiltrados.forEach(pedido => {
        const statusAtual = getPedidoStatus(pedido.id);
        const isPedidoSeparado = statusAtual === "Pedido separado";

        let statusClass;
        if (statusAtual === "Aguardando separação") {
            statusClass = "status-aguardando-separacao";
        } else if (statusAtual === "Em separação") {
            statusClass = "status-em-separacao";
        } else if (statusAtual === "Pedido separado") {
            statusClass = "status-pedido-separado";
        } else {
            statusClass = "";
        }

        const pedidoCard = document.createElement("div");
        pedidoCard.classList.add("card");
        pedidoCard.setAttribute("data-pedido-id", pedido.id);
        pedidoCard.innerHTML = `
            <div class="pedido-header">
                <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                <p>Endereço: ${pedido.endereco}</p>
                <p>Embarque: ${pedido.embarque}</p>
                <p class="status-pedido ${statusClass}">Status: ${statusAtual}</p>
            </div>
        `;

        const sortedSectors = Object.keys(pedido.produtos).sort();

        const isAdmin = usuarioLogado.toLowerCase() === "admin";
        sortedSectors.forEach(setor => {
            const isUserSetor = usuarioLogado.toLowerCase() === setor.toLowerCase();
            const isSetorAlreadySent = isSetorEnviado(pedido.id, setor);

            if (globalFiltroMaterial !== "Todos" && setor !== globalFiltroMaterial) {
                return;
            }

            const userCanViewSetor = true;

            if (!userCanViewSetor) {
                return;
            }

            const setorDiv = document.createElement("div");
            setorDiv.innerHTML = `<h4>Setor: ${setor}</h4>`;

            pedido.produtos[setor].forEach(produto => {
                const peso = getDadosPesoPedido(pedido.id)[produto] !== undefined ? getDadosPesoPedido(pedido.id)[produto] : '';
                const certificado = getDadosCertificadoPedido(pedido.id)[produto] !== undefined ? getDadosCertificadoPedido(pedido.id)[produto] : '';
                setorDiv.innerHTML += `
                    <div class="item">
                        <span>${produto}:</span>
                        <div>
                            <input
                                type="number"
                                step="5"
                                placeholder="Peso (kg)*"
                                value="${peso}"
                                id="peso-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}"
                                ${isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação" ? 'disabled' : ''}
                            />
                            <input
                                type="text"
                                placeholder="Certificado*"
                                value="${certificado}"
                                id="certificado-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}"
                                ${isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação" ? 'disabled' : ''}
                                style="margin-left: 10px; width: 220px;"
                            />
                        </div>
                    </div>
                `;
            });

            const buttonRow = document.createElement("div");
            buttonRow.classList.add("buttons-row");

            const btnIniciarSeparacao = document.createElement("button");
            btnIniciarSeparacao.textContent = `Iniciar Separação (${setor})`;
            btnIniciarSeparacao.classList.add("btn-iniciar-separacao");
            btnIniciarSeparacao.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Aguardando separação";
            btnIniciarSeparacao.onclick = () => {
                confirmarAcao(
                    `Iniciar Separação para ${setor}?`,
                    `Você está prestes a iniciar a separação do setor de ${setor} para a COT_${pedido.id}. O status do pedido será atualizado para "Em separação". Confirma?`,
                    () => {
                        setPedidoStatus(pedido.id, "Em separação");
                        renderizarPedidosPorSetor(idPedidoEspecifico);
                    }
                );
            };
            buttonRow.appendChild(btnIniciarSeparacao);

            const btnSalvarPesos = document.createElement("button");
            btnSalvarPesos.textContent = `Salvar Pesos (${setor})`;
            btnSalvarPesos.classList.add("btn-salvar-peso");
            btnSalvarPesos.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação";
            btnSalvarPesos.onclick = () => salvarTodosPesosDoSetor(pedido.id, setor, pedido.produtos[setor], idPedidoEspecifico);
            buttonRow.appendChild(btnSalvarPesos);

            const btnEnviar = document.createElement("button");
            btnEnviar.textContent = `Enviar (${setor})`;
            btnEnviar.classList.add("btn-enviar");
            btnEnviar.disabled = isPedidoSeparado || isSetorAlreadySent || statusAtual !== "Em separação";
            btnEnviar.onclick = () => {
                let allWeightsEntered = true;
                pedido.produtos[setor].forEach(produto => {
                    const pesoInput = document.getElementById(`peso-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}`);
                    const certificadoInput = document.getElementById(`certificado-${pedido.id}-${setor}-${produto.replace(/\s/g, '-')}`);
                    if (pesoInput && (pesoInput.value === '' || parseFloat(pesoInput.value) <= 0)) {
                        allWeightsEntered = false;
                    }
                    if (certificadoInput && certificadoInput.value.trim() === '') {
                        allWeightsEntered = false;
                    }
                });

                if (!allWeightsEntered) {
                    showModal(
                        "Erro de Validação",
                        "Por favor, preencha o peso e o certificado para todos os produtos antes de enviar o setor.",
                        `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                    );
                    return;
                }

                confirmarAcao(
                    `Confirmar Envio para ${setor}?`,
                    `Você está prestes a finalizar o envio do setor de ${setor} para a COT_${pedido.id}. Confirma?`,
                    () => {
                        setSetorEnviado(pedido.id, setor);
                        if (verificarTodosSetoresEnviados(pedido.id)) {
                            setPedidoStatus(pedido.id, "Pedido separado");
                            showModal(
                                "Pedido Completo!",
                                `Todos os setores da COT_${pedido.id} foram enviados, e o status foi atualizado para "Pedido Separado".`,
                                `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                            );
                        } else {
                            showModal(
                                "Setor Enviado!",
                                `O setor de ${setor} da COT_${pedido.id} foi marcado como enviado. Outros setores ainda estão pendentes.`,
                                `<button class="modal-button ok" onclick="closeModal()">OK</button>`
                            );
                        }
                        renderizarPedidosPorSetor(idPedidoEspecifico);
                    }
                );
            };
            buttonRow.appendChild(btnEnviar);
            setorDiv.appendChild(buttonRow);
            pedidoCard.appendChild(setorDiv);
        });
        pedidosPorSetorDiv.appendChild(pedidoCard);
    });
    document.getElementById("pedidosPorSetor").scrollTop = 0;
}


function salvarTodosPesosDoSetor(pedidoId, setor, produtosDoSetor, idPedidoEspecifico) {
    let dadosPeso = getDadosPesoPedido(pedidoId);
    let dadosCertificado = getDadosCertificadoPedido(pedidoId);
    let inputsAtualizados = 0;
    let validationError = false;

    produtosDoSetor.forEach(produto => {
        const pesoInput = document.getElementById(`peso-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);
        const certificadoInput = document.getElementById(`certificado-${pedidoId}-${setor}-${produto.replace(/\s/g, '-')}`);

        if (pesoInput && !pesoInput.disabled) {
            const peso = parseFloat(pesoInput.value);
            if (isNaN(peso) || peso <= 0) {
                validationError = true;
            }
            if (dadosPeso[produto] === undefined || dadosPeso[produto] !== peso) {
                dadosPeso[produto] = peso;
                inputsAtualizados++;
            }
        }

        if (certificadoInput && !certificadoInput.disabled) {
            const certificado = certificadoInput.value.trim();
            if (certificado === '') {
                validationError = true;
            }
            if (dadosCertificado[produto] === undefined || dadosCertificado[produto] !== certificado) {
                dadosCertificado[produto] = certificado;
                inputsAtualizados++;
            }
        }
    });

    if (validationError) {
        showModal(
            "Erro de Validação",
            "Por favor, insira um peso válido (número maior que zero) e um certificado para todos os produtos antes de salvar.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
        return;
    }

    if (inputsAtualizados > 0) {
        setDadosPesoPedido(pedidoId, dadosPeso);
        setDadosCertificadoPedido(pedidoId, dadosCertificado);
        showModal(
            "Pesos Salvos!",
            `Os pesos e certificados para o setor ${setor} da COT_${pedidoId} foram salvos com sucesso.`,
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    } else {
        showModal(
            "Nenhuma Alteração!",
            "Nenhum peso ou certificado foi alterado ou não há inputs para salvar neste setor.",
            `<button class="modal-button ok" onclick="closeModal()">OK</button>`
        );
    }
    renderizarPedidosPorSetor(idPedidoEspecifico);
}


function exibirResumoEmbarques() {
    const embarqueSummaryDiv = document.getElementById("embarqueSummary");
    embarqueSummaryDiv.innerHTML = "";
    const resumo = {};

    let pedidosFiltrados;
    pedidosFiltrados = pedidos.filter(p => true);

    const regionColors = {
        'Cariacica, ES': 'red',
        'Fundão, ES': 'red',
        'Guarapari, ES': 'red',
        'Serra, ES': 'red',
        'Vitória, ES': 'red',
        'Vila Velha, ES': 'red',
        'Viana, ES': 'red',
        'Linhares, ES': 'blue',
        'Colatina, ES': 'green',
        'Aracruz, ES': 'yellow',
        'São Mateus, ES': 'teal',
        'Cachoeiro de Itapemirim, ES': 'cyan',
        'Castelo, ES': 'indigo'
    };

    pedidosFiltrados.forEach(pedido => {
        const status = getPedidoStatus(pedido.id);
        const materialCorresponde = globalFiltroMaterial === "Todos" || Object.keys(pedido.produtos).includes(globalFiltroMaterial);

        if (status !== "Pedido separado" && materialCorresponde) {
            const embarque = pedido.embarque;
            if (!resumo[embarque]) {
                resumo[embarque] = { count: 0, color: '' };

                for (const [region, color] of Object.entries(regionColors)) {
                    if (pedido.endereco.includes(region)) {
                        resumo[embarque].color = color;
                        break;
                    }
                }

                if (!resumo[embarque].color) {
                    const defaultColors = ['blue', 'green', 'yellow', 'teal', 'pink', 'purple', 'orange', 'cyan'];
                    resumo[embarque].color = defaultColors[Object.keys(resumo).length % defaultColors.length];
                }
            }
            resumo[embarque].count++;
        }
    });

    const embarquesOrdenados = Object.keys(resumo).sort();

    if (embarquesOrdenados.length === 0) {
        embarqueSummaryDiv.innerHTML = "<p style='text-align: center; color: var(--text-secondary);'>Nenhum pedido pendente por localidade.</p>";
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'none';
        return;
    } else {
        document.querySelector('.summary-section .filter-box-button-bottom').style.display = 'block';
    }

    embarquesOrdenados.forEach(embarque => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("summary-item");

        const colorClass = `embarque-${resumo[embarque].color}`;
        itemDiv.classList.add(colorClass);

        itemDiv.innerHTML = `
            <span>Rota ${embarque}: ${resumo[embarque].count} pedidos</span>
            <button onclick="viewPedidosFromSummary('${embarque}')"
                    style="padding: 8px 16px; border-radius: 4px; border: none;
                          font-weight: 500; cursor: pointer; transition: all 0.3s ease;">
                Ver Pedidos
            </button>
        `;
        embarqueSummaryDiv.appendChild(itemDiv);
    });
}

function viewPedidosFromSummary(embarque) {
    globalFiltroRota = (embarque === '') ? "todas" : embarque;
    globalFiltroStatus = "todas";
    pedidoUnicoVisualizado = null;

    showMainAppScreen();
}

function goBackToFilterScreen() {
    showFilterScreen();
}

function viewSingleOrder(pedidoId) {
    pedidoUnicoVisualizado = pedidoId;
    globalFiltroRota = "todas";
    globalFiltroStatus = "todas";
    showMainAppScreen();
}

function goBackToAllOrders() {
    pedidoUnicoVisualizado = null;
    globalFiltroRota = previousGlobalFiltroRota;
    globalFiltroStatus = previousGlobalFiltroStatus;
    showMainAppScreen();
}


function showModal(title, message, buttonsHtml) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modalButtons").innerHTML = buttonsHtml;
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
}

function confirmarAcao(title, message, onConfirm) {
    window._onConfirmAction = onConfirm;
    showModal(
        title,
        message,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="closeModal(); window._onConfirmAction();">Confirmar</button>
        `
    );
}

function aplicarFiltroStatusPrincipal(status, clickedButton) {
    globalFiltroStatus = status;
    const buttons = document.querySelectorAll('#mainAppStatusFilters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosPorSetor(pedidoUnicoVisualizado);
}


function exibirCotasPorEmbarque(pedidoId = null) {
    const quotationsSection = document.getElementById("quotationsByEmbarque");
    const quotationListDiv = document.getElementById("quotationList");
    quotationListDiv.innerHTML = "";

    if (!pedidoId || pedidoId === null) {
        quotationsSection.style.display = "none";
        return;
    }

    const pedido = pedidos.find(p => p.id === pedidoId);
    if (!pedido) {
        quotationsSection.style.display = "none";
        return;
    }

    quotationsSection.style.display = "none";
}

function confirmResetAllData() {
    showModal(
        "Zerar Todos os Dados?",
        "Esta ação irá reiniciar todos os pesos lançados, status de separação e envio por setor para TODOS os pedidos. Deseja realmente prosseguir?",
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" style="background-color: var(--red-error);" onclick="resetAllOrderData()">Sim, Zerar Tudo</button>
        `
    );
}


function resetAllOrderData() {
    closeModal();

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(localStorageDadosPesoKey) ||
            key.startsWith(localStorageCertificadoKey) ||
            key.startsWith(localStorageSetorEnviadoKey) ||
            key.startsWith(localStoragePedidoStatusKey) ||
            key.startsWith(localStoragePedidoCarregadoKey) ||
            key.startsWith(localStorageObservacaoCarregamentoKey) ||
            key.startsWith(localStoragePedidoMotoristaKey)) { 
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    pedidos.forEach(p => {
        p.status = "Aguardando separação";
        const originalPedido = pedidos.find(op => op.id === p.id);
        if (originalPedido) {
            p.motorista = originalPedido.motorista;
        }
    });

    showModal(
        "Dados Zerados!",
        "Todos os dados de peso, envio por setor e status de separação foram reiniciados. Você será redirecionado para a tela de filtros.",
        `<button class="modal-button ok" onclick="closeModal(); goBackToFilterScreen();">Ok</button>`
    );
}

document.addEventListener("DOMContentLoaded", () => {
    showUserSelectionPage();
});



function showLoadingOrdersScreen() {
    hideAllScreens();
    document.getElementById("loaderOrdersScreen").style.display = "flex";
    renderizarPedidosCarregamento();
}

function aplicarFiltroCarregamento(filtro, clickedButton) {
    globalFiltroCarregamento = filtro;
    const buttons = document.querySelectorAll('#loaderOrdersScreen .loader-status-filters button');
    buttons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    renderizarPedidosCarregamento();
}


function renderizarPedidosCarregamento() {
    const listDiv = document.getElementById("loadingOrdersList");
    listDiv.innerHTML = "";

    let pedidosParaCarregar = pedidos.filter(p => {
        const pedidoStatus = getPedidoStatus(p.id);
        const carregadoStatus = getPedidoCarregadoStatus(p.id);
        const motoristaDestino = getPedidoMotoristaDestino(p.id);


        if (globalFiltroCarregamento === 'todos') {
            return true; 
        }

        else if (globalFiltroCarregamento === 'meus') {
            return motoristaDestino === usuarioLogado;
        }
        return false;
    });

    if (pedidosParaCarregar.length === 0) {
        listDiv.innerHTML = "<p style='text-align:center; color:var(--text-secondary)'>Nenhum pedido encontrado com os filtros aplicados.</p>";
        return;
    }

    const pedidosPorEmbarque = pedidosParaCarregar.reduce((acc, pedido) => {
        if (!acc[pedido.embarque]) {
            acc[pedido.embarque] = [];
        }
        acc[pedido.embarque].push(pedido);
        return acc;
    }, {});

    const embarquesOrdenados = Object.keys(pedidosPorEmbarque).sort();

    embarquesOrdenados.forEach(embarque => {
        const embarqueGroupDiv = document.createElement("div");
        embarqueGroupDiv.classList.add("embarque-group");
        embarqueGroupDiv.innerHTML = `<h3>Embarque: ${embarque}</h3>`;

        pedidosPorEmbarque[embarque].forEach(pedido => {
            const pedidoCarregadoStatus = getPedidoCarregadoStatus(pedido.id);
            const observacaoCarregamento = getObservacaoCarregamento(pedido.id);
            const pedidoStatus = getPedidoStatus(pedido.id);
            const motoristaDestino = getPedidoMotoristaDestino(pedido.id);

            let statusClass = '';
            let statusText = '';

            if (pedidoStatus === "Aguardando separação" || pedidoStatus === "Em separação") {
                statusClass = "status-aguardando-separacao";
                statusText = pedidoStatus;
            } else if (pedidoCarregadoStatus === 'carregado') {
                statusClass = 'status-carregado';
                statusText = 'Carregado';
            } else if (pedidoCarregadoStatus === 'nao-carregado') {
                statusClass = 'status-nao-carregado';
                statusText = 'Não Carregado';
            } else {
                statusClass = 'status-pedido-separado';
                statusText = 'Aguardando carregamento';
            }

            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-pedido-id", pedido.id);
            card.innerHTML = `
                <div class="pedido-header">
                    <h3>COT_${pedido.id} - ${pedido.cliente}</h3>
                    <p>Endereço: ${pedido.endereco}</p>
                    <p>Destinado a: ${motoristaDestino ? motoristaDestino.toUpperCase() : 'Não Destinado'}</p>
                    <p class="status-pedido ${statusClass}">Status: ${statusText}</p>
                </div>
            `;

            Object.keys(pedido.produtos).forEach(setor => {
                const setorDiv = document.createElement("div");
                setorDiv.innerHTML = `<h4>Setor: ${setor}</h4>`;
                pedido.produtos[setor].forEach(item => {
                    const itemId = `item-${pedido.id}-${setor}-${item.replace(/\s/g, '-')}`;
                    const isChecked = localStorage.getItem(itemId) === 'true';
                    setorDiv.innerHTML += `
                        <div class="item">
                            <span>${item}</span>
                            <input type="checkbox" id="${itemId}" ${isChecked ? 'checked' : ''}
                                ${pedidoCarregadoStatus !== 'pendente' || pedidoStatus !== "Pedido separado" ? 'disabled' : ''}>
                        </div>
                    `;
                });
                card.appendChild(setorDiv);
            });

            const loaderButtonsDiv = document.createElement("div");
            loaderButtonsDiv.classList.add("loader-buttons");


            if (usuarioLogado === "carregador1") {
                const btnDestinar = document.createElement("button");
                btnDestinar.textContent = "Destinar Cotação para carregamento.";
                btnDestinar.classList.add("btn-destinar");
                btnDestinar.onclick = () => showDestinarCarregamentoModal(pedido.id);
                loaderButtonsDiv.appendChild(btnDestinar);
            }



            if (pedidoStatus === "Pedido separado" && (motoristaDestino === usuarioLogado || !motoristaDestino)) {
                const btnCarregado = document.createElement("button");
                btnCarregado.textContent = "Marcar como Carregado";
                btnCarregado.classList.add("btn-carregado");
                btnCarregado.disabled = pedidoCarregadoStatus !== 'pendente';
                btnCarregado.onclick = () => marcarPedidoCarregado(pedido.id);
                loaderButtonsDiv.appendChild(btnCarregado);

                const btnNaoCarregado = document.createElement("button");
                btnNaoCarregado.textContent = "Marcar como Não Carregado";
                btnNaoCarregado.classList.add("btn-nao-carregado");
                btnNaoCarregado.disabled = pedidoCarregadoStatus !== 'pendente';
                btnNaoCarregado.onclick = () => showObservacaoModal(pedido.id);
                loaderButtonsDiv.appendChild(btnNaoCarregado);
            } else if (pedidoStatus !== "Pedido separado") {
                const infoText = document.createElement("p");
                infoText.textContent = "Aguardando separação para carregamento.";
                infoText.style.color = "var(--text-secondary)";
                infoText.style.fontSize = "14px";
                infoText.style.textAlign = "center";
                loaderButtonsDiv.appendChild(infoText);
            }


            card.appendChild(loaderButtonsDiv);

            if (pedidoCarregadoStatus === 'nao-carregado' && observacaoCarregamento) {
                const obsDiv = document.createElement("div");
                obsDiv.classList.add("observacao-nao-carregado");
                obsDiv.style.display = 'block';
                obsDiv.innerHTML = `<p><strong>Observação:</strong> ${observacaoCarregamento}</p>`;
                card.appendChild(obsDiv);
            }

            embarqueGroupDiv.appendChild(card);
        });
        listDiv.appendChild(embarqueGroupDiv);
    });
}

function toggleItemCarregado(pedidoId, setor, itemSlug) {
    const itemId = `item-${pedidoId}-${setor}-${itemSlug}`;
    const checkbox = document.getElementById(itemId);
    localStorage.setItem(itemId, checkbox.checked ? 'true' : 'false');
}

function marcarPedidoCarregado(pedidoId) {
    const pedido = pedidos.find(p => p.id === pedidoId);
    let allItemsChecked = true;
    if (pedido) {
        for (const setor in pedido.produtos) {
            pedido.produtos[setor].forEach(item => {
                const itemId = `item-${pedido.id}-${setor}-${item.replace(/\s/g, '-')}`;

                const checkbox = document.getElementById(itemId);
                if (checkbox && !checkbox.disabled && localStorage.getItem(itemId) !== 'true') {
                    allItemsChecked = false;
                }
            });
        }
    }

    if (!allItemsChecked) {
        showModal("Atenção", "Por favor, marque todos os itens do pedido como carregados antes de finalizar.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    confirmarAcao(
        "Confirmar Carregamento?",
        `Você está prestes a marcar a COT_${pedidoId} como "Carregado". Confirma?`,
        () => {
            setPedidoCarregadoStatus(pedidoId, "carregado");
            setObservacaoCarregamento(pedidoId, "");
            showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Carregado".`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        }
    );
}

function showObservacaoModal(pedidoId) {
    const currentObs = getObservacaoCarregamento(pedidoId);
    showModal(
        "Motivo Não Carregado",
        `
        <p>Por favor, informe o motivo pelo qual a COT_${pedidoId} não foi carregada:</p>
        <textarea id="observacaoNaoCarregado" placeholder="Descreva o motivo..." rows="4">${currentObs}</textarea>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="salvarObservacaoNaoCarregado(${pedidoId})">Salvar</button>
        `
    );
}

function salvarObservacaoNaoCarregado(pedidoId) {
    const observacao = document.getElementById("observacaoNaoCarregado").value.trim();
    if (observacao === "") {
        showModal("Atenção", "Por favor, preencha o motivo para não carregamento.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }
    setObservacaoCarregamento(pedidoId, observacao);
    setPedidoCarregadoStatus(pedidoId, "nao-carregado");
    closeModal();
    showModal("Sucesso", `Pedido COT_${pedidoId} marcado como "Não Carregado" com observação.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}

function showDestinarCarregamentoModal(pedidoId) {
    const motoristasCarregamento = Object.keys(usuarios).filter(user => user.startsWith('carregador'));
    let optionsHtml = motoristasCarregamento.map(motorista => `<option value="${motorista}">${motorista.toUpperCase()}</option>`).join('');

    const currentMotorista = getPedidoMotoristaDestino(pedidoId);

    showModal(
        "Destinar Carregamento",
        `
        <p>Selecione o Carregador para destinar o carregamento da COT_${pedidoId}:</p>
        <select id="selectMotoristaDestino" style="width: 100%; padding: 10px; margin-top: 15px; border-radius: 5px; border: 1px solid var(--medium-gray);">
            <option value="">Não Destinado</option>
            ${optionsHtml}
        </select>
        `,
        `
        <button class="modal-button cancel" onclick="closeModal()">Cancelar</button>
        <button class="modal-button confirm" onclick="destinarCarregamento(${pedidoId})">Destinar</button>
        `
    );

    if (currentMotorista) {
        document.getElementById('selectMotoristaDestino').value = currentMotorista;
    }
}

function destinarCarregamento(pedidoId) {
    const selectElement = document.getElementById('selectMotoristaDestino');
    const motoristaSelecionado = selectElement.value;

    setPedidoMotoristaDestino(pedidoId, motoristaSelecionado);
    closeModal();
    showModal("Sucesso", `Carregamento da COT_${pedidoId} destinado a ${motoristaSelecionado ? motoristaSelecionado.toUpperCase() : 'Ninguém'}.`, `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
}
