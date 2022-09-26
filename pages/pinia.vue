<script lang="ts">
import { defineComponent, ref } from "vue";
import { userStore } from "../store/user";

export default defineComponent({
  layoutName: "default",
  head: {
    title: "tezjs: Pinia"
  },

  setup() {
    const user = userStore();

    const data = ref("");

    function addUser() {
      var textArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "T",
        "U"
      ];

      var data = {
        id: this.user.users.length + 1,
        name: textArray[this.user.users.length] + " Name"
      };
      // var data = {id:1, name:'mansi'}
      user.adduser(data);
    }
    // @ts-ignore
    window.stores = { user };

    return {
      addUser,
      data,
      user
    };
  }
});
</script>
  <template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-end mt-2 mr-2">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-end"
        v-on:click="addUser"
      >Add User</button>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Id</th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b" v-for="data of user.users" :key="data.id">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >{{ data.id }}</td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >{{ data.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  