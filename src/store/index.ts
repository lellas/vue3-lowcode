import formComponentStore from "./form";
export default function useStore() {
    return {
        form: formComponentStore()
    }
}