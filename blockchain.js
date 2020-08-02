function registrarRequerente() {
  event.preventDefault();
  if ($("#_enderecoRequerente").val().length != 42) {
    $("#_enderecoRequerente").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerente").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerente").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registrarRequerente($("#_enderecoRequerente").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registrarRequerente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("registrarRequerente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("registrarRequerente - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function retirarRequerente() {
  event.preventDefault();
  if ($("#_enderecoRequerente").val().length != 42) {
    $("#_enderecoRequerente").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerente").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerente").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .retirarRequerente($("#_enderecoRequerente").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("retirarRequerente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("retirarRequerente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("retirarRequerente - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function registrarRequerida() {
  event.preventDefault();
  if ($("#_enderecoRequerida").val().length != 42) {
    $("#_enderecoRequerida").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerida").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerida").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registrarRequerida($("#_enderecoRequerida").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registrarRequerida - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("registrarRequerida - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("registrarRequerida - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function retirarRequerida() {
  event.preventDefault();
  if ($("#_enderecoRequerida").val().length != 42) {
    $("#_enderecoRequerida").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerida").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerida").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .retirarRequerida($("#_enderecoRequerida").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("retirarRequerida - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("retirarRequerida - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("retirarRequerida - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function designarCoArbitro() {
  event.preventDefault();
  if ($("#_coarbitroIndicado").val().length != 42) {
    $("#_coarbitroIndicado").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_coarbitroIndicado").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_coarbitroIndicado").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .designarCoArbitro($("#_coarbitroIndicado").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("designarCoArbitro - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("designarCoArbitro - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("designarCoArbitro - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function designarArbitroPresidente() {
  event.preventDefault();
  if ($("#_arbitroPresidenteIndicado").val().length != 42) {
    $("#_arbitroPresidenteIndicado").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_arbitroPresidenteIndicado").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_arbitroPresidenteIndicado").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .designarArbitroPresidente($("#_arbitroPresidenteIndicado").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("designarArbitroPresidente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("designarArbitroPresidente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("designarArbitroPresidente - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function assinarSentencaCoArbitro() {
  $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
  $("#statusTransacoes").show();
  contratoComSignatario
    .assinarSentencaCoArbitro("#opcaoCoArb")
    .then((transacao) => {
      transacao
        .wait()
        .then((resultado) => {
          console.log("assinarSentencaCoArbitro - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Assinatura computada. Obrigado.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro no voto: " + resultado);
          }
        })
        .catch((err) => {
          console.error("enviaVoto - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("enviaVoto - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function assinarSentencaArbitroPresidente() {
  $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
  $("#statusTransacoes").show();
  contratoComSignatario
    .assinarSentencaArbitroPresidente($("#opcaoArbPresidente").val())
    .then((transacao) => {
      transacao
        .wait()
        .then((resultado) => {
          console.log("assinarSentencaArbitroPresidente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Assinatura computada. Obrigado.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro no voto: " + resultado);
          }
        })
        .catch((err) => {
          console.error("enviaVoto - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("enviaVoto - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function pagarMensalidadeRequerente() {
  //Primeiro, obtenha o valor informado no campo
  //Como se trata de numero, importante multiplicar por 1 para que
  //o Javascript entenda perfeitamente que é um numero
  var amount = $("#valorMensalidade").val() * 1;
  if (amount < 10000000) {
    alert("You must pay a minimum of 1 gwei to the Contract");
    return false;
  }
  //Nao esquecer de obter o objeto pelo jQuery!!
  $("#boxCommStatus").html("Enviando transação...");
  $("#boxCommStatus").focus();
  //Tenta fazer a conversao do valor a ser pago para wei
  try {
    console.log("amount ", amount, "#valorMensalidade", $("#valorMensalidade").val());
    amount = ethers.utils.parseUnits($("#valorMensalidade").val(), "gwei");
    //dica importante: se for um valor fixo tem de passar como string, entre aspas
    //amount = ethers.utils.parseUnits("10000000", "gwei");
    console.log("novo amount ", amount);
  } catch (err) {
    console.error("erro fazendo parse de valor ", err);
    return;
  }
  //
  var additionalSettings = {
    value: amount,
  };
  console.log("additionalSettings ", additionalSettings);
  contratoComSignatario
    .PagarMensalidadeRequerente(additionalSettings)
    .then((tx) => {
      console.log("executePayment - Transaction ", tx);
      $("#boxCommStatus").html("Transação enviada. Aguarde o processamento...");
      $("#boxCommStatus").focus();
      tx.wait()
        .then((resultFromContract) => {
          console.log("executePayment - the result was ", resultFromContract);
          obtemSaldoContaCameraArbitragem();
          $("#boxCommStatus").html("Transaction executed.");
        })
        .catch((err) => {
          console.error("executePayment - after tx being mint");
          console.error(err);
          $("#boxCommStatus").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("executePayment - tx has been sent");
      console.error(err);
      $("#boxCommStatus").html("Something went wrong: " + err.message);
    });
}

function pagarTaxaDeRequerimento() {
  if (amount < 1000000000) {
    alert("You must pay a minimum of 1 gwei to the Contract");
    return false;
  }
  boxCommStatus.innerHTML = "Sending transaction...";
  var additionalSettings = {
    value: ethers.utils.parseUnits(amount, "gwei"),
  };
  contratoComSignatario
    .pagarTaxaDeRequerimento(additionalSettings)
    .then((tx) => {
      console.log("executePayment - Transaction ", tx);
      boxCommStatus.innerHTML = "Transaction sent. Waiting for the result...";
      tx.wait()
        .then((resultFromContract) => {
          console.log("executePayment - the result was ", resultFromContract);
          getContractBalance();
          boxCommStatus.innerHTML = "Transaction executed.";
        })
        .catch((err) => {
          console.error("executePayment - after tx being mint");
          console.error(err);
          boxCommStatus.innerHTML = "Algo saiu errado: " + err.message;
        });
    })
    .catch((err) => {
      console.error("executePayment - tx has been sent");
      console.error(err);
      boxCommStatus.innerHTML = "Something went wrong: " + err.message;
    });
}

function obtemSaldoContaCameraArbitragem() {
  contratoComSignatario.contaCamaraDeArbitragem().then((account) => {
    getAccountBalance(account);
  });
}

function getAccountBalance(account) {
  provedorDeSignatarios
    .getBalance(account)
    .then((saldo) => {
      alert("O saldo atual é: " + saldo);
    })
    .catch((err) => {
      console.error("Erro em getAccountBalance ", err.message);
      console.error(err);
    });
}
