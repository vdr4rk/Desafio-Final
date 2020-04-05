(function (angular) {
    'use strict';

    angular.module('stefanini.utils', [])
        .factory('ArhUtils', ArhUtils);

        ArhUtils.$inject = ['$rootScope'];

        function ArhUtils($rootScope) {
            var factory = {
                excluiMensagem: excluiMensagem,
                limpaMensagens: limpaMensagens
            };

            return factory;

            /**
             * Apagar mensagem determinada da lista de mensagens do GAW
             * @param {*} msg 
             */
            function excluiMensagem(msg) {
                for (var i = 0; i < $rootScope.messages.length; i++) {
                    var m = $rootScope.messages[i];
                    if (m === msg) {
                        $rootScope.messages.splice(i, 1);
                        return;
                    }
                }
            }

            /**
             Limpar tudo!
             */
            function limpaMensagens() {
                $rootScope.messages.length = 0;
            }
        }

})(angular);