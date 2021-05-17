import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Compra de equipamentos</td>
            <td className="withdraw">- R$ 5.000,00</td>
            <td>Equipamento</td>
            <td>21/02/2021</td>
          </tr>
          <tr>
            <td>Alta na bolsa</td>
            <td className="deposit">R$ 15.000,00</td>
            <td>Investimentos</td>
            <td>22/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
