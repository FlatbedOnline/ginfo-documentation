
# Regra Disponibilidade

- Por padrão, todo veículo é considerado **ativo todos os dias**, exceto domingo.
- Caso o veículo **não atinja o Stresstest** (mínimo de 2 saídas), é feito **desconto do mês inteiro**.
- Caso o veículo **atinja o stresstest**:
    - Para cada dia **sem telemetria** (sem sinal do rastreador), é feito **desconto do dia inteiro**.

- Se o veículo **atinge o stresstest e possui telemetria**, então é verificada a existência de **Ordem de Serviço (OS)**:
    - **OS Imediata**: desconto ocorre **da abertura até o fechamento**. Se ainda estiver aberta, o desconto continua até a finalização.
    - **Outros tipos de OS**: desconto ocorre **do início do atendimento (quando o mecânico começa)** até a finalização.