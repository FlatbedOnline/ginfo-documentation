<template><div><h1 id="regra-disponibilidade" tabindex="-1"><a class="header-anchor" href="#regra-disponibilidade"><span>Regra Disponibilidade</span></a></h1>
<ul>
<li>
<p>Por padrão, todo veículo é considerado <strong>ativo todos os dias</strong>, exceto domingo.</p>
</li>
<li>
<p>Caso o veículo <strong>não atinja o Stresstest</strong> (mínimo de 2 saídas), é feito <strong>desconto do mês inteiro</strong>.</p>
</li>
<li>
<p>Caso o veículo <strong>atinja o stresstest</strong>:</p>
<ul>
<li>Para cada dia <strong>sem telemetria</strong> (sem sinal do rastreador), é feito <strong>desconto do dia inteiro</strong>.</li>
</ul>
</li>
<li>
<p>Se o veículo <strong>atinge o stresstest e possui telemetria</strong>, então é verificada a existência de <strong>Ordem de Serviço (OS)</strong>:</p>
<ul>
<li><strong>OS Imediata</strong>: desconto ocorre <strong>da abertura até o fechamento</strong>. Se ainda estiver aberta, o desconto continua até a finalização.</li>
<li><strong>Outros tipos de OS</strong>: desconto ocorre <strong>do início do atendimento (quando o mecânico começa)</strong> até a finalização.</li>
</ul>
</li>
</ul>
</div></template>


