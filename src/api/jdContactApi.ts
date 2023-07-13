import jdContactManager from "../managers/jdContactManager";

class JdContactApi {

    private url: string = 'http://localhost:3000/api/v1/contact';

    public async sendForm(): Promise<boolean> {
        try {
            await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jdContactManager.store.contactInfo),
            });
            return true;
        } catch (error) {
            return false;
        }
    }


}
const jdContactApi: JdContactApi = new JdContactApi();
export default jdContactApi;