import chai from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
// Importa el controlador de sesiones
import sessionsController from '../src/controllers/sessions.controller.js';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe("Testing PF Sessions", () => {
    // TEST1
    it("EP POST /api/sessions/register", async () => {
        const userCredentials = {
            email: "testUser@example.com",
            password: "testPassword"
        };

        const {
            statusCode,
            ok,
            _body
        } = await requester.post("/api/sessions/register").send(userCredentials);

        console.log(statusCode);
        console.log(ok);
        console.log(_body);

        // Agrega aserciones según la lógica de tu aplicación
        expect(statusCode).to.equal(200);
        expect(ok).to.equal(true);
        // Agrega más aserciones según la respuesta esperada
    });

    // TEST2
    it("EP POST /api/sessions/login", async () => {
        const userCredentials = {
            email: "testUser@example.com",
            password: "testPassword"
        };

        const {
            statusCode,
            ok,
            _body
        } = await requester.post("/api/sessions/login").send(userCredentials);

        console.log(statusCode);
        console.log(ok);
        console.log(_body);

        // Agrega aserciones según la lógica de tu aplicación
        expect(statusCode).to.equal(200);
        expect(ok).to.equal(true);
        // Agrega más aserciones según la respuesta esperada
    });

    // TEST3
    it("EP GET /api/sessions/current", async () => {
        // Simula tener un usuario autenticado (puedes ajustar según tu lógica)
        const authenticatedUser = {
            username: "testUser",
            password: "testPassword"
        };

        // Realiza la autenticación simulada antes de hacer la solicitud GET
        await sessionsController.login({ body: authenticatedUser });

        const {
            statusCode,
            ok,
            _body
        } = await requester.get("/api/sessions/current");

        console.log(statusCode);
        console.log(ok);
        console.log(_body);

        // Agrega aserciones según la lógica de tu aplicación
        expect(statusCode).to.equal(200);
        expect(ok).to.equal(true);
        // Agrega más aserciones según la respuesta esperada
    });
});
