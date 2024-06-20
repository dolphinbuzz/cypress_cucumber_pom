# utf-8
# language: pt

@all
Funcionalidade: Login
   # Contexto:
       # Dado que acesso a página inicial

#    @login-01
#    Cenário:Realizar login com sucesso
#        Quando insiro usuario
#        E insiro senha
#        E clico em Sign in
#        Então valido que o login foi realizado com sucesso
#
#    @login-02
#    Cenário: Realizar login sem sucesso
#        Quando insiro usuario
#        E insiro senha incorreta
#        E clico em Sign in
#        Então valido mensagem de erro

#    @login-03
#    Cenário: Realizar login sem sucesso
#        Quando insiro usuario incorreto
#        E insiro senha
#        E clico em Sign in
#        Então valido mensagem de erro

    @login-04
    Cenário: Criar novo usuario
        Quando clico na aba Register
        E insiro o nome completo
        E insiro o username
        E insiro o email
        E insiro email de confirmação
        E insiro uma nova senha
        E clico em Register
        Então valido que o login foi realizado com sucesso
        E valido que o usuario foi criado com sucesso