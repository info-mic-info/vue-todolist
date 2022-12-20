// Descrizione: Rifare l'esercizio della to do list. Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [
                {
                    text: "Comprare latte",
                    done: true
                },
                {
                    text: "Comprare uova",
                    done: false
                },
                {
                    text: "Comprare farina",
                    done: false
                },
                {
                    text: "Comprare lievito",
                    done: false
                },
                {
                    text: "Comprare zucchero",
                    done: true
                }
            ]

        }
    },

    methods: {
        // MILESTONE 2
        // Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
        removeTask(index) {
            let remove = this.todolist.splice(index, 1)
            console.log(remove)
        },
        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

        addTask(index) {
            let object ={
                text: this.newTask,
                done: false
            }
            this.todolist.push(object)
            this.newTask=``
            console.log(object)
        }


    }
}).mount('#app')