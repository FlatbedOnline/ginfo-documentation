<template><div><h1 id="disponibilidade" tabindex="-1"><a class="header-anchor" href="#disponibilidade"><span>Disponibilidade</span></a></h1>
<h2 id="regra-disponibilidade" tabindex="-1"><a class="header-anchor" href="#regra-disponibilidade"><span>Regra Disponibilidade</span></a></h2>
<ul>
<li>Por padrão, todo veículo é considerado ativo todos os dias, exceto domingo.</li>
<li>Caso o veículo não atinja o stresstest (mínimo de 2 saídas), ocorre desconto do mês inteiro.</li>
<li>Caso o veículo atinja o stresstest:</li>
<li>Para cada dia sem telemetria, ocorre desconto do dia inteiro.</li>
</ul>
<p>Se o veículo atinge o stresstest e possui telemetria, é verificada a existência de Ordem de Serviço (OS):</p>
<ul>
<li>OS Imediata: desconto da abertura até o fechamento; se estiver aberta, o desconto continua até a finalização.</li>
<li>Outros tipos de OS: desconto do início do atendimento até a finalização.</li>
</ul>
<h2 id="regra-de-indisponibilidade-manutencao-veiculo" tabindex="-1"><a class="header-anchor" href="#regra-de-indisponibilidade-manutencao-veiculo"><span>Regra de indisponibilidade manutenção veículo</span></a></h2>
<p>Status:</p>
<ul>
<li>Ativos: veículos ativos no sistema FT</li>
<li>Inativos: veículos inativos no sistema FT</li>
<li>NA: veículos não estão no FT</li>
</ul>
<p>Saída:
Quantidade de saídas no 2ART ou S4</p>
<p>Stress Teste:
Se não teve 2 saídas no 2ART ou S4, fica indisponível</p>
<p>Horas em manutenção:</p>
<ul>
<li>Período em que o veículo ficou em manutenção (início até fim), descontando tempo de pausa</li>
<li>OS imediata: da data de criação até o encerramento</li>
</ul>
<p>Dias sem telemétrica:
Dias em que o veículo ficou sem posição do rastreador</p>
<p>Indisponibilidade total:
Total de horas indisponível dividido pelo total de horas (não contando o documento)</p>
<p>Indisponibilidade contratada:
Mesmo cálculo da indisponibilidade total, considerando apenas veículos do FT</p>
<p>Indisponibilidade perfil ativo:
Mesmo cálculo da indisponibilidade total, considerando apenas veículos ativos no FT</p>
</div></template>


