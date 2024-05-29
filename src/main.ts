
import { AppServer } from "./presentation/appServer";

export async function  main():Promise<void> {

    await AppServer.run(5000)
    
}
main()
