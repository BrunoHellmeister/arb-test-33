/*
SPDX-License-Identifier: CC-BY-4.0
(c) Desenvolvido por Bruno Hellmeister - 2020 - Todos os direitos reservados
*/
pragma solidity 0.6.10;


contract GestaoDeArbitragem 
{
    
    address public caseManager;
    address public presidenteDaCamaraArbitral;
    uint256 public taxaDeRequerimento;
    uint256 public dataDeProtocolo = now;
    uint256 public totalDeCoarbitros;
    bool public statusPagamentoDoRequerimento;
    address payable public contaCamaraDeArbitragem;
    uint256 public valorDaMensalidade;
    mapping (address =>bool) public coarbitro;
    mapping(address => bool) public arbitroPresidente;
    mapping(address => bool) public requerentes;
    mapping(address => bool) public requeridas;
    uint256 public confirmarAssinaturaNaSentenca;
    event AssinaturaConfirmada(address presidenteDaCamaraArbitral);
    uint256 public confirmarAssinaturaNosEsclarecimentos;
    bool[] public statusPagamentoMensalRequerente;
    bool[] public statusPagamentoMensalRequerida;
    bool precisaDeaudiencia;
    uint256 public custasDaAudienciaRequerente;
    bool public statusPagamentoAudienciaRequerente;
    uint256 public custasDaAudienciaRequerida;
    bool public statusPagamentoAudienciaRequerida;
    uint256 public honorariosArbitraisRequerente;
    bool public statusPagamentoHonorariosRequerente;
    uint256 public honorariosArbitraisRequerida;
    bool public statusPagamentoHonorariosRequerida;
    
    
    constructor(address payable _contaCamaraArb, uint256 _custasDoProtocolo, address _enderecoPresidente, uint256 _mensalidade) public 
    {
        caseManager = msg.sender;
        taxaDeRequerimento = _custasDoProtocolo;
        contaCamaraDeArbitragem = _contaCamaraArb;
        presidenteDaCamaraArbitral = _enderecoPresidente;
        valorDaMensalidade = _mensalidade;
    }
 
 
    function registrarRequerente(address _enderecoRequerente) public somentePresidente returns (bool)  {
        requerentes[_enderecoRequerente] = true;
        return true;
    }
    
    function registrarRequerida(address _enderecoRequerida) public somentePresidente returns (bool)  {
        requeridas[_enderecoRequerida] = true;
        return true;
    }

    function designarCoArbitro(address _coarbitroIndicado) public somentePresidente returns (bool)  {
        coarbitro[_coarbitroIndicado] = true;
        totalDeCoarbitros = totalDeCoarbitros + 1;
        return true;
    }
    
    
    function designarArbitroPresidente(address _arbitroPresidenteIndicado) public somentePresidente returns (bool)  {
        arbitroPresidente[_arbitroPresidenteIndicado] = true;
        return true;
    }
    
    function impugnaCoarbitro(address _coarbitroIndicado) public somentePresidente returns (bool) {
        require(coarbitro[_coarbitroIndicado] == true, "Árbitro não encontrado");
        coarbitro[_coarbitroIndicado] = false;
        totalDeCoarbitros = totalDeCoarbitros - 1;
        return true;
    }
  
    function impugnaArbitroPresidente(address _arbitroPresidenteIndicado) public somentePresidente returns (bool) {
        require(arbitroPresidente[_arbitroPresidenteIndicado] == true, "Árbitro não encontrado");
        arbitroPresidente[_arbitroPresidenteIndicado] = false;
        return true;
    }
    
    function retirarRequerente(address _enderecoRequerente) public somentePresidente returns (bool) {
    require(requerentes[_enderecoRequerente] == true, "Parte não encontrada");
    requerentes[_enderecoRequerente] = false;
    return true;
    }
    
    function retirarRequerida(address _enderecoRequerida) public somentePresidente returns (bool) {
    require(requeridas[_enderecoRequerida] == true, "Parte não encontrada");
    requeridas[_enderecoRequerida] = false;
    return true;
    }
    
    function assinarSentencaCoArbitro (uint256 code) public returns (bool) {
    require(coarbitro[msg.sender] == true, "Árbitro não encontrado");
    if (code == 1) {
      confirmarAssinaturaNaSentenca = confirmarAssinaturaNaSentenca + 1;
    } 
    emit AssinaturaConfirmada(msg.sender);
    coarbitro[msg.sender] = false;
    totalDeCoarbitros = totalDeCoarbitros - 1;
    return true;
    }
    
    function assinarSentencaArbitroPresidente (uint256 code) public returns (bool) {
    require (arbitroPresidente[msg.sender] == true, "Árbitro não encontrado");
    if (code == 1) {
      confirmarAssinaturaNaSentenca = confirmarAssinaturaNaSentenca + 1;
    } 
    emit AssinaturaConfirmada(msg.sender);
    arbitroPresidente[msg.sender] = false;
    return true;
    }
    
    
    function assinarEsclarecimentosCoArbitro (uint256 code) public returns (bool) {
    require(coarbitro[msg.sender] == true, "Árbitro não encontrado");
    if (code == 2) {
      confirmarAssinaturaNaSentenca = confirmarAssinaturaNaSentenca + 1;
    } 
    emit AssinaturaConfirmada(msg.sender);
    coarbitro[msg.sender] = false;
    totalDeCoarbitros = totalDeCoarbitros - 1;
    return true;
    }
    
    function assinarEsclarecimentosArbitroPresidente (uint256 code) public returns (bool) {
    require (arbitroPresidente[msg.sender] == true, "Árbitro não encontrado");
    if (code == 2) {
      confirmarAssinaturaNaSentenca = confirmarAssinaturaNaSentenca + 1;
    } 
    emit AssinaturaConfirmada(msg.sender);
    arbitroPresidente[msg.sender] = false;
    return true;
    }
    
    
    modifier somenteCaseManager() {
        require(caseManager == msg.sender, "Só o Case Manager pode realizar essa operação");
        _;
    }

    modifier somentePresidente() {
        require(presidenteDaCamaraArbitral == msg.sender, "Somente o presidente pode realizar essa operação");
        _;
    }
   
    function pagarTaxaDeRequerimento() public payable 
    {
        require(msg.value==taxaDeRequerimento, "Valor incorreto");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoDoRequerimento = true;
    }
    
    function quantosPagamentosMensaisRequerente() public view returns (uint256) {
        return statusPagamentoMensalRequerente.length;
    }
    
    function quantosPagamentosMensaisRequerida() public view returns (uint256) {
        return statusPagamentoMensalRequerida.length;
    }
    
    function PagarMensalidadeRequerente() public payable {
        require(msg.value>=valorDaMensalidade, "Valor insuficiente");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoMensalRequerente.push(true);
    }
    
    function PagarMensalidadeRequerida() public payable {
        require(msg.value>=valorDaMensalidade, "Valor insuficiente");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoMensalRequerida.push(true);
    }
    
    function registrarCustasDaAudiencia(uint _custasDaAudienciaPorParte) public somenteCaseManager returns (bool)  {
        precisaDeaudiencia = true;
        custasDaAudienciaRequerente = _custasDaAudienciaPorParte;
        custasDaAudienciaRequerida = _custasDaAudienciaPorParte;
        return true;
    }
    
    function pagarAudienciaRequerente() public payable {
        require(msg.value==custasDaAudienciaRequerente, "Valor incorreto");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoAudienciaRequerente = true;
    }
    
    function pagarAudienciaRequerida() public payable {
        require(msg.value==custasDaAudienciaRequerida, "Valor incorreto");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoAudienciaRequerida = true;
    }
    
    function registrarHonorariosDosArbitros(uint _honorariosArbitraisPorParte) public somenteCaseManager returns (bool)  {
        honorariosArbitraisRequerente = _honorariosArbitraisPorParte;
        honorariosArbitraisRequerida = _honorariosArbitraisPorParte;
        return true;
    }
    
    function pagarHonorariosRequerente() public payable {
        require(msg.value==honorariosArbitraisRequerente, "Valor incorreto");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoHonorariosRequerente = true;
    }
    
    function pagarHonorariosRequerida() public payable {
        require(msg.value==honorariosArbitraisRequerida, "Valor incorreto");
        contaCamaraDeArbitragem.transfer(msg.value);
        statusPagamentoHonorariosRequerida = true;
    }
    
    function haPendencia(uint256 _duracaoArbitragemMeses) public view returns (string memory){ 
        if (statusPagamentoDoRequerimento == false) {
            return "Requerimento de Arbitragem não pago";
        } else {
            if (statusPagamentoHonorariosRequerente == false) {
            return "Honorarios devidos pela Requerente não pagos";
            } else {
                if (statusPagamentoHonorariosRequerida == false) {
                    return "Honorarios devidos pela Requerida não pagos";
                } else {
                    if (statusPagamentoMensalRequerente.length != _duracaoArbitragemMeses) {
                        return "Mensalidade da Requerente Pendente";
                    } else {
                        if(statusPagamentoMensalRequerida.length != _duracaoArbitragemMeses) {
                            return "Mensalidade da Requerida Pendente";
                        } else {
                            if (precisaDeaudiencia == false) {
                             return "Não há pendencia";
                        } else if (precisaDeaudiencia == true) {
                            if (statusPagamentoAudienciaRequerente == false) {
                                return "custas da audiencia não paga pela Requerente";
                            } else {
                                if (statusPagamentoAudienciaRequerida == false) {
                                    return "custas da audiencia não paga pela Requerida";
                                } else {
                                    return "Não há pendencia";
                                  }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
                        
