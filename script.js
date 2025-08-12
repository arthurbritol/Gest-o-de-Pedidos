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

        // Este é o bloco de código que adiciona o botão de impressão para etiquetas
        if (isPedidoSeparado) {
             const btnImprimirEtiquetas = document.createElement("button");
             btnImprimirEtiquetas.textContent = "Imprimir Etiquetas";
             btnImprimirEtiquetas.classList.add("btn-print-etiqueta");
             btnImprimirEtiquetas.onclick = () => imprimirEtiquetas(pedido.id);
             pedidoCard.appendChild(btnImprimirEtiquetas);
         }

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
        } else if (globalFiltroCarregamento === 'meus') {
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

                if (pedidoCarregadoStatus === 'carregado') {
                    const btnImprimir = document.createElement("button");
                    btnImprimir.textContent = "Imprimir Pedido";
                    btnImprimir.classList.add("btn-print");
                    btnImprimir.onclick = () => gerarPDF(pedido.id);
                    loaderButtonsDiv.appendChild(btnImprimir);
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
                if (checkbox && !checkbox.enabled && localStorage.getItem(itemId) !== 'true') {
                    allItemsChecked = false;
                }
            });
        }
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

function gerarPDF(pedidoId) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);

    let content = `
        <h1>Relatório de Carregamento - COT_${pedido.id}</h1>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Endereço:</strong> ${pedido.endereco}</p>
        <hr>
        <h2>Materiais Carregados:</h2>
    `;

    for (const setor in pedido.produtos) {
        content += `<h3>Setor: ${setor}</h3><ul>`;
        pedido.produtos[setor].forEach(produto => {
            const peso = dadosPeso[produto] || 'Não registrado';
            const certificado = dadosCertificado[produto] || 'Não aplicável';
            content += `
                <li>
                    <strong>${produto}</strong><br>
                    - Peso: ${peso}<br>
                    - Certificado: ${certificado}
                </li>
            `;
        });
        content += `</ul>`;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Relatório COT_${pedido.id}</title>
                <style>
                    body { font-family: Arial; margin: 20px; }
                    h1 { color: #2c3e50; }
                    h2 { border-bottom: 1px solid #eee; padding-bottom: 5px; }
                    ul { list-style-type: none; padding-left: 0; }
                    li { margin-bottom: 10px; padding: 8px; background: #f9f9f9; }
                </style>
            </head>
            <body>${content}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}


function getPedidoById(pedidoId) {
    return pedidos.find(p => p.id === pedidoId);
}

function salvarDadosPesoCertificado(pedidoId, produto, peso, certificado) {
    const pesos = JSON.parse(localStorage.getItem('pesosPedidos')) || {};
    const certificados = JSON.parse(localStorage.getItem('certificadosPedidos')) || {};

    if (!pesos[pedidoId]) pesos[pedidoId] = {};
    if (!certificados[pedidoId]) certificados[pedidoId] = {};

    pesos[pedidoId][produto] = peso;
    certificados[pedidoId][produto] = certificado;

    localStorage.setItem('pesosPedidos', JSON.stringify(pesos));
    localStorage.setItem('certificadosPedidos', JSON.stringify(certificados));
}

function imprimirEtiquetas(pedidoId) {
    const pedido = getPedidoById(pedidoId);
    if (!pedido) {
        showModal("Erro", "Pedido não encontrado.", `<button class="modal-button ok" onclick="closeModal()">OK</button>`);
        return;
    }

    const dadosPeso = getDadosPesoPedido(pedidoId);
    const dadosCertificado = getDadosCertificadoPedido(pedidoId);

    let totalItens = 0;
    for (const setor in pedido.produtos) {
        totalItens += pedido.produtos[setor].length;
    }

    let etiquetaHTML = `
        <html>
        <head>
            <title>Etiquetas COT_${pedido.id}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }
                .etiqueta-container {
                    width: 112mm;
                    height: 80mm;
                    border: 1px solid black;
                    padding: 3mm;
                    box-sizing: border-box;
                    page-break-inside: avoid;
                    display: grid;
                    grid-template-columns: -1fr 2fr;
                    grid-template-rows: auto auto auto 1fr;
                    gap: 3mm;
                    font-size: 7pt;
                    margin-bottom: 5mm;
                    position: relative;
                }

                .background-logo {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('data:image/png;base64,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');
                    background-size: 40%;
                    background-repeat: no-repeat;
                    background-position: center;
                    opacity: 0.1;
                    z-index: -1; 
                }
                .grid-cell {
                    display: flex;
                    align-items: center;
                    padding: 1mm;
                    border: 1px solid black;
                    box-sizing: border-box;
                }
                .header-row {
                    grid-column: 1 / 3;
                    display: grid;
                    grid-template-columns: 2fr 2fr 1fr 0.5fr 0.5fr;
                    gap: 1px;
                }
                .header-row > .grid-cell {
                    justify-content: center;
                    text-align: center;
                }
                .raz-social-row {
                    grid-column: 1 / 3;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 1px;
                }
                .raz-social-row > .grid-cell:first-child {
                    font-weight: bold;
                }
                .nota-fiscal-row {
                    grid-column: 1 / 3;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1px;
                }
                .nota-fiscal-row > .grid-cell {
                    justify-content: center;
                    text-align: center;
                }
                .equip-details-section {
                    grid-column: 1 / 2;
                    display: grid;
                    grid-template-rows: repeat(4, 1fr);
                    gap: 1px;
                }
                .qr-code-section {
                    grid-column: 2 / 3;
                    grid-row: 4 / 5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                }
                .label {
                    font-weight: bold;
                    padding-right: 2mm;
                    white-space: nowrap;
                }
                .info {
                    font-weight: normal;
                }
            </style>
        </head>
        <body>
    `;

    let contadorItens = 0;
    for (const setor in pedido.produtos) {
        pedido.produtos[setor].forEach(produto => {
            contadorItens++;
            const volumeString = `${contadorItens}/${totalItens}`;

            etiquetaHTML += `
                <div class="etiqueta-container">
                    <div class="background-logo"></div>
                    <div class="header-row">
                        <div class="grid-cell"><span>Pedido compra<br><strong class="info">COT_${pedido.id}</strong></span></div>
                        <div class="grid-cell"><span>Local de entrega:<br><strong class="info">${pedido.endereco}</strong></span></div>
                        <div class="grid-cell"><span>Volume:<br><strong class="info">${volumeString}</strong></span></div>
                    </div>
                    <div class="raz-social-row">
                        <div class="grid-cell">Razão Social</div>
                        <div class="grid-cell"><span class="info">EMPRESA FICTÍCIA LTDA</span></div>
                    </div>
                    <div class="nota-fiscal-row">
                        <div class="grid-cell">Nota fiscal</div>
                        <div class="grid-cell">Peso</div>
                        <div class="grid-cell">Certificado:</div>
                        <div class="grid-cell">Data Emissão NF.</div>
                    </div>
                    <div class="equip-details-section">
                        <div class="grid-cell"><span class="label">Ponto de Descarga:</span></div>
                        <div class="grid-cell"><span class="label">Tipo Material:<br><strong class="info">${produto}</strong></span></div>
                        <div class="grid-cell"><span class="label">Cliente:<br><strong class="info">${pedido.cliente}</strong></span></div>
                    </div>
                    <div class="qr-code-section">
                        QR CODE
                    </div>
                </div>
            `;
        });
    }

    etiquetaHTML += `</body></html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(etiquetaHTML);
    printWindow.document.close();
    printWindow.print();
}