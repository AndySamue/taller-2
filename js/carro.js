const firebaseConfig = {
    apiKey: "AIzaSyDD7MAMwJW5LmlEcRAcaqDFZJNUJKpwpg8",
    authDomain: "menu-9467c.firebaseapp.com",
    projectId: "menu-9467c",
    storageBucket: "menu-9467c.firebasestorage.app",
    messagingSenderId: "281316909643",
    appId: "1:281316909643:web:59b3c8ec1ba714c9a9a3ce"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Agregar producto
const agregarProducto = async (nombre, precio) => {
    try {
        await db.collection("carro").add({ nombre, precio: parseFloat(precio) });
        await cargarCarrito();
    } catch (error) {
        console.error("No se puede agregar producto", error);
    }
}

// Cargar carrito y total
const cargarCarrito = async () => {
    const lista = document.getElementById("carro");
    lista.innerHTML = "";
    let total = 0;

    const productos = await db.collection("carro").get();
    productos.forEach(pro => {
        const elemento = pro.data();
        total += elemento.precio;

        const li = document.createElement("li");
        li.textContent = `${elemento.nombre} $${elemento.precio.toFixed(2)}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("bg-red-500", "text-white", "px-2", "py-1", "ml-2", "rounded");
        btnEliminar.addEventListener("click", async () => {
            try {
                await db.collection("carro").doc(pro.id).delete();
                await cargarCarrito();
            } catch (error) {
                console.error("Error al eliminar el producto", error);
            }
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });

    const totalCompra = document.getElementById("totalCompra");
    if (totalCompra) {
        totalCompra.textContent = `${total.toFixed(2)}`;
    }
}

// Botones con ids y listeners individuales
window.onload = () => {
    cargarCarrito();

    document.getElementById("btnAgregar1").addEventListener("click", () => {
        agregarProducto("Ensalada de camarones y palmito con vinagreta cítrica", 14.50);
    });
    document.getElementById("btnAgregar2").addEventListener("click", () => {
        agregarProducto("Camarones empanizados en coco con salsa de mango picante", 17.50);
    });
    document.getElementById("btnAgregar3").addEventListener("click", () => {
        agregarProducto("Camarones a la diabla sobre cama de quinoa especiada", 10.50);
    });
    document.getElementById("btnAgregar4").addEventListener("click", () => {
        agregarProducto("Camarones a la diabla sobre cama de quinoa especiada", 13.50);
    });
    document.getElementById("btnAgregar5").addEventListener("click", () => {
        agregarProducto("Camarones jumbo salteados en mantequilla de ajo y perejil", 18.50);
    });
    document.getElementById("btnAgregar6").addEventListener("click", () => {
        agregarProducto("Camarones flambeados al cognac con crema ligera", 15.50);
    });
}