<template>
  <div id="app">
    <h1>QUIERO un SÚPER DESAYUNO para PAPÁ!</h1>
    <form>
      <span>${{ total }}</span>
      <span v-if="errors != ''">{{ errors }}</span>

      <!-- paso 1 -->
      <section v-if="step == 1">
        <h2>¿Que opción prefieres?</h2>
        <h3>
          La bandeja puede venir de carton o de madera. Contamos con opciones de
          GRANDE, GIGANTE y PREMIUM en sus dos opciones.
        </h3>
        <div class="producto">
          <div class="producto_container">
            <div class="producto_imagen">
              <img
                src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260"
                alt
              />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="bandeja"
                id="bandejaSinPatas"
                value="bandejaSinPatas"
                v-model="form.bandejaSeleccionada"
              />
              <label for="bandejaSinPatas">Desayuno en BANDEJA | Entre $800 y $1500 (EFECTIVO)</label>
            </div>
          </div>
          <div class="producto_container">
            <div class="producto_imagen">
              <img
                src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260"
                alt
              />
            </div>
            <div class="producto_meta">
              <input
                type="radio"
                name="bandeja"
                id="bandejaConPatas"
                value="bandejaConPatas"
                v-model="form.bandejaSeleccionada"
              />
              <label for="bandejaConPatas">
                Desayuno en BANDEJA con PATAS | Entre $1500 y $3000
                (EFECTIVO)
              </label>
            </div>
          </div>
        </div>
      </section>
      <!-- paso 2 bandeja sin patas -->
      <transition name="fade">
        <section v-if="step == 2 && form.bandejaSeleccionada == 'bandejaSinPatas'">
          <div class="producto_header">
            <h3
              class="producto_header_title"
              v-if="form.bandejaSeleccionada == 'bandejaSinPatas'"
            >Bandeja Común</h3>
            <h3 class="producto_header_title" v-else>Bandeja con patas</h3>
            <h4 class="producto_header_description">
              Excelente opción para llevar a todos lados. Luego de la selección
              del modelo podes seleccionar la Taza o Mate.
            </h4>
          </div>
          <div class="producto producto_tamanio">
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh5.googleusercontent.com/pMYWSNGafIIjUPGFo29JSO8AZUA1kGc5j7_so9uIpAcUee7NovGLTOcplhdgzgNb9xNWk6Y6dp_tBtjGPUHvJc-dWiYF4Jb3DlJ9HsBLdHC85DzqfT_I7ER3BclO=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tamanio"
                  id="grande"
                  value="grande"
                  v-model="form.tamanio"
                  @click="total = 800"
                />
                <label for="grande">
                  GRANDE | $800 en EFECTIVO | Taza o Mate a elección + Galletas
                  Pitusas + bizcochitos + pic nic + chicle emoji + gomitas fini
                  + bombón obli bon + alfajor minyo + botella Pepsi + golosina
                  malvavisco + cubanitos + dancig + orange pie + galleta
                  polvorita + dorins + caramelo masticable + caramelos Billiken
                  + pink pie + conito dulce de leche + turron y maní + leche
                  descremada + té + azúcar + chocolate submarino.
                </label>
              </div>
            </div>

            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tamanio"
                  id="gigante"
                  value="gigante"
                  v-model="form.tamanio"
                  @click="total = 1100"
                />
                <label for="gigante">
                  GIGANTE | $1100 en EFECTIVO | Taza o Mate a elección + Turrón
                  y mani + monedas de chocolate + oblea polvorita + cubanitos +
                  alfajor minyo + tita + bombón obli bon + orange pie + pink pie
                  + dorins + pic NIC + caramelo masticable + botella Pepsi
                  golosina + dulce de leche + mermelada + dancig + palito para
                  untar + taza o mate + jugo pepito + malvavisco + mini
                  Coronitas + gomitas fini + bizcochitos + conito dulce de leche
                  + paraguitas + caramelos Billiken + chocolate submarino +
                  leche descremada + azúcar + té + chicle emoji +
                  cucharita.
                </label>
              </div>
            </div>

            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="premium"
                  id="gigante"
                  value="premium"
                  v-model="form.tamanio"
                  @click="total = 1500"
                />
                <label for="premium">
                  PREMIUM | $1500 en EFECTIVO | Taza Artesanal o Set Matero +
                  Mini coronitas + gomitas yumy + pepitos + malvavisco + pink
                  pie + tita + kroony blanco + sapito + conito dulce de leche +
                  hababitos + bon o bon + dancig + mini oreo + paraguitas + jugo
                  pepito + bubbalo + dulce de leche + mermelada frutilla +
                  gomitas fini + chocolinas + marroc + cubanitos + turron y maní
                  + chocolate submarino + leche descremada + azucar + te + kooky
                  bon + mate cocido + caramelosmasticable + palito para untar +
                  cucharita + alfajor tofi + moneda de chocolate + taza o
                  mate.
                </label>
              </div>
            </div>
          </div>
        </section>
      </transition>
      <!-- paso 3 bandeja sin patas + taza o juego de mate -->
      <transition name="fade">
        <section v-if="step == 3 && form.bandejaSeleccionada == 'bandejaSinPatas'">
          <div class="producto_header">
            <h3 class="producto_header_title" v-if="form.tamanio == 'grande'">Bandeja Común - GRANDE</h3>
            <h3
              class="producto_header_title"
              v-else-if="form.tamanio == 'gigante'"
            >Bandeja Común - GIGANTE</h3>
            <h3 class="producto_header_title" v-else>Bandeja Común - PREMIUM</h3>
            <h4 class="producto_header_description">${{ total }} precio en EFECTIVO.</h4>
          </div>
          <!--TAZAS-->
          <div class="producto_carrusel">
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh3.googleusercontent.com/JDpEpA0zG-KusmGuhD3AbQ5ol9NPj3IYt1fqST6offVwSOuZMfamNTfjuYw_Bs9ydcvSB8msGMgCbv6K1VCFCBqfZW5jCB7h0W84e-ONLFjUv6Au08ApDYqXstRH=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="taza1"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">Taza 1 - Papa sos mi Rockstar.</label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh4.googleusercontent.com/twJq3K521zogmJhN-onoFSXqDIzl7gk6EeMeNZYrMO86vgaO7VA5AZ9sDoUZW4h7nFwzEnkWoa32Sj5cyMG5i6JM_0xiL63KKW9iyQMorABy4mYnCg9LyesdoATs=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="taza2"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">
                  Taza 2 - Mi padre es Mágico, siempre que lo llamo
                  aparece
                </label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh4.googleusercontent.com/ip9BxDySittLrzGsTLUpm9V3O6UUsPHF7iRRXARrgpWOQpS9jXrO8vnAm_tYdmht4NYa6uXv6tpLeCMXIVNdK9IfASGj1esYemUu3Yn9w0LxA9qsX6Mm5t2H_HS9=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="taza3"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">Taza 3 - Eres el mejor padre del mundo.</label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh4.googleusercontent.com/jDWr2bHSgvAwUNE-eom18qYVRt0gD3vhhwU5Y-JXb5dnHZFTWjNugSTSIveyViJnJt7xlui3X9UjxqS0sicicsI0U80ho1oMnyG5j0zTjh_0eOD0y3_xWSiAQwTE=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="taza4"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">Taza 4 - Papá te quiero mucho</label>
              </div>
            </div>
          </div>
          <div class="producto_carrusel">
            <!--MATES-->
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh6.googleusercontent.com/oFFP2w-EAGwvAqxSKegoPLfqcSuLvg_i-MH8CNXvh4KhxagaWsZ71seeMBsc50eLu86U6hYZva2hybUMizVG18sBkb7lp1Yn201svjQtLwLXxf5040EWvAuLv92N=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="mate1"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">Mate 01 - I love Papa.</label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh3.googleusercontent.com/rxykFuLB1UczJirJU_l5WPP4fjQMURIelmxkiDUMxiZChsV4RaEqserHEGyAmfppGLC_RRPsTyJMgSRKLHlGLJDUFwJDZmuN7JUvHaYqyQN04iicxhDisVZX2Qql=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="tazaOmate"
                  id="tazaOmate"
                  value="taza2"
                  v-model="form.tazaOmate"
                />
                <label for="tazaOmate">Mate 02 - Yo Quiero Bigote mi papa.</label>
              </div>
            </div>
          </div>
        </section>
      </transition>

      <!-- paso 4 bandeja sin patas + globo-->
      <transition name="fade">
        <section v-if="step == 4 && form.bandejaSeleccionada == 'bandejaSinPatas'">
          <div class="producto_header">
            <h3
              class="producto_header_title"
            >Usted puede agregarle un globo por $200 pesos adicionales.</h3>
          </div>
          <!--globos-->
          <div class="producto_carrusel">
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh5.googleusercontent.com/5u9ysBCdCTm6w7FqWnE4IoU3YP6d8bDiGB6SXEMqmxzZT6chgKDRxAn_hVlpoDhOSrQUJQ235rCeTxZra0d301jw1D0yphS_jJe2o0mPQQ9w0n-ClmfEM2lbeVZR=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input
                  type="radio"
                  name="globo"
                  id="globo"
                  value="globo1"
                  v-model="form.tazaOmate"
                  @click.once="total += 200"
                />
                <label for="globo">Globo 1 | Feliz día.</label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh4.googleusercontent.com/y9AkoMJ4SjeErNbRNSlnwGiHuwm7ft9b5VzGOqTH4G815RDYSb6owtQFrdNzdqoTXIAMbiNTDSbD2UhEeVDzqPCnGyTQffHI6e-6zpL4uN5Zg0aA1sx9dPVIikMK=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input type="radio" name="globo" id="globo" value="globo2" v-model="form.tazaOmate" />
                <label for="globo">Globo 2 | Corona de rey.</label>
              </div>
            </div>
            <div class="producto_container">
              <div class="producto_imagen">
                <img
                  src="https://lh5.googleusercontent.com/iQnSNxfU694NtoCM1EBBxXc3ClMIVNwvSnMpbWxQwDFem2lvHYRip_O_EJEVz2bUxsD8cmSr1FeQYkf0FMyKecBtsNWSHaOEoacP5GjQwtZTOw4uxgI-Ztei5QLf=w260"
                  alt
                />
              </div>
              <div class="producto_meta">
                <input type="radio" name="globo" id="globo" value="globo3" v-model="form.tazaOmate" />
                <label for="globo">Globo 3 | Patrullero policia.</label>
              </div>
            </div>
          </div>
        </section>
      </transition>
      <button v-if="step != 1" @click.prevent="previusStep">volver</button>
      <button v-if="step != totalSteps" @click.prevent="nextStep">Siguiente</button>
      <button v-if="step == totalSteps" @click.prevent="sendPedido">Pedir producto</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  data: {
    step: 1,
    totalSteps: 4,
    errors: [],
    total: 0,
    form: {
      bandejaSeleccionada: null,
      tamanio: null,
      tazaOmate: null,
      globo: null
    }
  },

  methods: {
    nextStep: function() {
      this.errors = null;
      if (this.step == 1) {
        if (!this.form.bandejaSeleccionada) {
          this.errors = "Porfavor seleccione un producto";
          return false;
        }
      }

      if (this.step == 2) {
        if (!this.form.tamanio) {
          this.errors = "Porfavor seleccione el tamaño ";
          return false;
        }
      }

      this.step++;
    },
    previusStep: function() {
      this.step--;
    },
    sendPedido: function() {
      alert("enviado");
    }
  },
  mounted() {}
};
</script>
