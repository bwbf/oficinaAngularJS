var app = angular.module("frontEndMean", ['ngMaterial','ui.router']);
app.controller("frontEndMeanController", function ($scope) {
    $scope.mensagem = 'Ola mundo !';
    $scope.contatos = [];

    $scope.dataAgora = new Date();
    $scope.adicionaUm = function () {
        var pessoaTemp = angular.copy($scope.pessoa);
        $scope.contatos.push(pessoaTemp);
        $scope.pessoa = {};
    }
})



