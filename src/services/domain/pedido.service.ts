import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";
import { PeditoDTO } from "../../models/pedido.dto";

@Injectable()
export class PedidoService{

    constructor(public http: HttpClient){

    }

    insert(obj: PeditoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response', 
                responseType: 'text'
            }
        );
    }

}