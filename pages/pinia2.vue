<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCartStore } from "../store/cart";


export default defineComponent({
  layoutName: "default",
  head: {
    title: "tezjs: Pinia"
  },

  setup() {
    const cart = useCartStore();

    const itemName = ref("");

    function addItemToCart() {
      if (!itemName.value) return;
      cart.addItem(itemName.value);
      itemName.value = "";
    }

    function clearCart() {
      if (window.confirm("Are you sure you want to clear the cart?")) {
        cart.rawItems = [];
      }
    }

    // @ts-ignore
    window.stores = { cart };

    return {
      itemName,
      addItemToCart,
      cart,
      clearCart
    };
  }
});
</script>
  <template>
  <div class="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-12 bg-white ">
    <div>
      <p
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >Make your grocery list here</p>
      <p class="mt-2">Hello User</p>
      <p class="mt-2 mb-5">
        This grocery list is implemented with
        <a href="https://tezjs.io/">TezJs</a> and
        <a href="https://pinia.vuejs.org/">Pinia</a>
      </p>
    </div>

    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <div class="flex mb-6">
        <div class="w-72">
          <input
            type="text"
            v-model="itemName"
            placeholder="Add items"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div class="mx-4">
          <button
            type="submit"
            class="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg"
          >Add</button>
        </div>
      </div>
    </form>

      <div class="flex">
      <ul data-testid="items" class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        <li v-for="item in cart.items" :key="item.name" class="px-6 py-2 border-b border-gray-200 w-full relative">
          {{ item.name }} ({{ item.amount }})
          <button
            @click="cart.removeItem(item.name)"    
            class="absolute inset-y-0 right-0 inline-block px-3 py-2 bg-red-600 text-white font-medium text-xs rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0"
          >X</button>
        </li>
      </ul>
      </div>
      <div class="mt-6">
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
        class="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg"
      >Clear List</button>
      </div>
  </div>
</template>
  