import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-Pedido.dto";

export interface PeditoDTO{
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}