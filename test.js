import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    vus: 10, // 10 usuários simultâneos
    duration: "30s", // teste rodando por 30 segundos
};

export default function () {
    let res = http.get("http://localhost:8000/items");

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response is not empty": (r) => r.body.length > 0,
    });

    sleep(1); // aguarda 1 segundo antes da próxima requisição
}

// k6 run .\test.js