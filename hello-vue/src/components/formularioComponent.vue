<template>
<div class="container">
     <h1>QUIERO un SÚPER DESAYUNO para PAPÁ!</h1>
    <form action="" id="app">
        <span>${{ total }}</span>
        <span v-if = "errors != '' ">
            {{ errors }}
        </span>
       
        <!-- paso 1 -->
        <section v-if="step == 1">
            <h2>¿Que opción prefieres?</h2>
            <h3>La bandeja puede venir de carton o de madera. Contamos con opciones de GRANDE, GIGANTE y PREMIUM en sus dos opciones.</h3>
            <div class="producto">
                <div class="producto_container">
                    <div class="producto_imagen">
                        <img src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260" alt="">
                    </div>
                    <div class="producto_meta">
                        <input type="radio" name="bandeja" id="bandejaSinPatas" value="bandejaSinPatas" v-model="form.bandejaSeleccionada">
                        <label for="bandejaSinPatas">Desayuno en BANDEJA | Entre $800 y $1500 (EFECTIVO)</label>
                    </div>
                </div>
                <div class="producto_container">
                    <div class="producto_imagen">
                        <img src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260" alt="">
                    </div>
                    <div class="producto_meta">
                        <input type="radio" name="bandeja" id="bandejaConPatas" value="bandejaConPatas" v-model="form.bandejaSeleccionada">
                        <label for="bandejaConPatas">Desayuno en BANDEJA con PATAS | Entre $1500 y $3000 (EFECTIVO)</label>
                    </div>
                </div>
            </div>
        </section>
        <!-- paso 2 bandeja sin patas -->
        <transition name="fade">
            <section v-if="step == 2 && form.bandejaSeleccionada == 'bandejaSinPatas' ">
                <div class="producto_header">
                    <h3 class="producto_header_title" v-if="form.bandejaSeleccionada == 'bandejaSinPatas' ">Bandeja Común</h3>
                    <h3 class="producto_header_title" v-else >Bandeja con patas</h3>
                    <h4 class="producto_header_description">Excelente opción para llevar a todos lados. Luego de la selección del modelo podes seleccionar la Taza o Mate.</h4>
                </div>
                <div class="producto producto_tamanio">
                    <div class="producto_container">
                        <div class="producto_imagen">
                            <img src="https://lh5.googleusercontent.com/pMYWSNGafIIjUPGFo29JSO8AZUA1kGc5j7_so9uIpAcUee7NovGLTOcplhdgzgNb9xNWk6Y6dp_tBtjGPUHvJc-dWiYF4Jb3DlJ9HsBLdHC85DzqfT_I7ER3BclO=w260" alt="">
                        </div>
                        <div class="producto_meta">
                            <input type="radio" name="tamanio" id="grande" value="grande" v-model="form.tamanio" @click="total = 800">
                            <label for="grande">GRANDE | $800 en EFECTIVO | Taza o Mate a elección + Galletas Pitusas + bizcochitos + pic nic + chicle emoji + gomitas fini + bombón obli bon + alfajor minyo + botella Pepsi + golosina malvavisco + cubanitos + dancig + orange pie + galleta polvorita + dorins + caramelo masticable + caramelos Billiken + pink pie + conito dulce de leche + turron y maní + leche descremada + té + azúcar + chocolate submarino.</label>
                        </div>
                    </div>

                    <div class="producto_container">
                        <div class="producto_imagen">
                            <img src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260" alt="">
                        </div>
                        <div class="producto_meta">
                            <input type="radio" name="tamanio" id="gigante" value="gigante" v-model="form.tamanio" @click="total = 1100">
                            <label for="gigante">GIGANTE | $1100 en EFECTIVO | Taza o Mate a elección + Turrón y mani + monedas de chocolate + oblea polvorita + cubanitos + alfajor minyo + tita + bombón obli bon + orange pie + pink pie + dorins + pic NIC + caramelo masticable + botella Pepsi golosina + dulce de leche + mermelada + dancig + palito para untar + taza o mate + jugo pepito + malvavisco + mini Coronitas + gomitas fini + bizcochitos + conito dulce de leche + paraguitas + caramelos Billiken + chocolate submarino + leche descremada + azúcar + té + chicle emoji + cucharita.</label>
                        </div>
                    </div>

                    <div class="producto_container">
                        <div class="producto_imagen">
                            <img src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260" alt="">
                        </div>
                        <div class="producto_meta">
                            <input type="radio" name="premium" id="gigante" value="premium" v-model="form.tamanio" @click="total = 1500">
                            <label for="premium">PREMIUM | $1500 en EFECTIVO | Taza Artesanal o Set Matero + Mini coronitas + gomitas yumy + pepitos + malvavisco + pink pie + tita + kroony blanco + sapito + conito dulce de leche + hababitos + bon o bon + dancig + mini oreo + paraguitas + jugo pepito + bubbalo + dulce de leche + mermelada frutilla + gomitas fini + chocolinas + marroc + cubanitos + turron y maní + chocolate submarino + leche descremada + azucar + te + kooky bon + mate cocido + caramelosmasticable + palito para untar + cucharita + alfajor tofi + moneda de chocolate + taza o mate.</label>
                        </div>
                    </div>

                </div>
            </section>
        </transition>
        <!-- paso 3 bandeja sin patas + taza o juego de mate -->
        <transition name="fade">
            <section v-if="step == 3 && form.bandejaSeleccionada == 'bandejaSinPatas' ">
                <div class="producto_header">
                    <h3 class="producto_header_title" v-if="form.tamanio == 'grande' ">Bandeja Común - GRANDE</h3>
                    <h3 class="producto_header_title" v-else-if="form.tamanio == 'gigante' ">Bandeja Común - GIGANTE</h3>
                    <h3 class="producto_header_title" v-else>Bandeja Común - PREMIUM</h3>
                    <h4 class="producto_header_description">${{total}} precio en EFECTIVO.</h4>
                </div>
            </section>
        </transition>

        <button v-if="step != 1" @click.prevent="previusStep">volver</button>
        <button v-if="step != totalSteps" @click.prevent="nextStep">Siguiente</button>
        <button v-if="step == 3" @click.prevent="sendPedido">Pedir producto</button>
    </form>
</div>
</template>

 <style lang="css">

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
        /*
        **************************************
        */
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .producto,
        .producto_tamanio{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap:1rem;
            justify-content: center;
        }
        .producto_tamanio{
            grid-template-columns: repeat(3,1fr);
        }
        .producto_container{
           border: 1px solid black;
           padding: 1rem;
        }
        .producto_header{
            background-color: #fff;
            border:1px solid black;
            margin-bottom: 1rem;
        }
        .producto_imagen{
            position: relative;
            min-height: 450px;
        }
        .producto_imagen > img{
           min-height:450px;
        }
        .producto_header_title{
            margin: 0;
            padding: 0;
            background-color: steelblue;
        }

    </style>
    <script>
        const App = new Vue({
            el:'#app',
            data: {
                step:1,
                totalSteps:3,
                errors:[],
                total:0,
                form: {
                    bandejaSeleccionada : null,
                    tamanio:null,
                },
            },
            
            methods:{
                nextStep:function()
                {
                    this.errors = null
                    if(this.step == 1)
                    {
                        if(!this.form.bandejaSeleccionada)
                        {
                            this.errors = 'Porfavor seleccione un producto'
                            return false
                        }
                    }

                    if(this.step == 2)
                    {
                        if(!this.form.tamanio)
                        {
                            this.errors = 'Porfavor seleccione el tamaño '
                            return false
                        }
                        
                    }


                    this.step++
                },
                previusStep:function()
                {
                    this.step--
                },
                sendPedido:function()
                {
                    alert('enviado')
                }
            },
            mounted(){
               
            }
        })
    </script>