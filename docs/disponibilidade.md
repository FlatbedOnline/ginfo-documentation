
## Regra Disponibilidade  
  
- Por padrão, todo veículo é considerado ativo todos os dias, exceto domingo.  
- Caso o veículo não atinja o stresstest (mínimo de 2 saídas), ocorre desconto do mês inteiro.  
- Caso o veículo atinja o stresstest:  
- Para cada dia sem telemetria, ocorre desconto do dia inteiro.  
  
Se o veículo atinge o stresstest e possui telemetria, é verificada a existência de Ordem de Serviço (OS):  
- OS Imediata: desconto da abertura até o fechamento; se estiver aberta, o desconto continua até a finalização.  
- Outros tipos de OS: desconto do início do atendimento até a finalização.