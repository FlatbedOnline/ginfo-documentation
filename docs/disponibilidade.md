# Disponibilidade

## Regra Disponibilidade  
  
- Por padrão, todo veículo é considerado ativo todos os dias, exceto domingo.  
- Caso o veículo não atinja o stresstest (mínimo de 2 saídas), ocorre desconto do mês inteiro.  
- Caso o veículo atinja o stresstest:  
- Para cada dia sem telemetria, ocorre desconto do dia inteiro.  
  
Se o veículo atinge o stresstest e possui telemetria, é verificada a existência de Ordem de Serviço (OS):  
- OS Imediata: desconto da abertura até o fechamento; se estiver aberta, o desconto continua até a finalização.  
- Outros tipos de OS: desconto do início do atendimento até a finalização.

## Regra de indisponibilidade manutenção veículo

Status:
- Ativos: veículos ativos no sistema FT
- Inativos: veículos inativos no sistema FT
- NA: veículos não estão no FT

Saída:
Quantidade de saídas no 2ART ou S4

Stress Teste:
Se não teve 2 saídas no 2ART ou S4, fica indisponível

Horas em manutenção:
- Período em que o veículo ficou em manutenção (início até fim), descontando tempo de pausa
- OS imediata: da data de criação até o encerramento

Dias sem telemétrica:
Dias em que o veículo ficou sem posição do rastreador

Indisponibilidade total:
Total de horas indisponível dividido pelo total de horas (não contando o documento)

Indisponibilidade contratada:
Mesmo cálculo da indisponibilidade total, considerando apenas veículos do FT

Indisponibilidade perfil ativo:
Mesmo cálculo da indisponibilidade total, considerando apenas veículos ativos no FT
