angular.module("site-api", []);
angular.module("site-api").controller("site-api-ctrl", function($scope, $http) {
	$scope.titulo = "Exemplo da api da Tray";

	var carregarProdutos = function () {
		$http.get("https://www.cellincase.com.br/web_api/products?");
	}

	carregarProdutos();
});

