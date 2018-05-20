<template>
    <div>

        <div class="table-wrapper">
            <h2 class="text-center">{{headline}}</h2>
            <div class="form-wrapper">
                <div class="input-wrapper">
                    <label for="age">Age</label>
                    <button class="btn btn-icon btn-light" @click="decreaseAge"><i class="fas fa-minus"></i></button>
                    <button class="btn btn-icon btn-light" @click="increaseAge"><i class="fas fa-plus"></i></button>
                    <div class="form-group">
                        <input class="form-control" type="number" v-model="age" id="age" :min="minAge" :max="maxAge">
                    </div>

                </div>

                <div class="input-wrapper">
                    <label for="height">Height</label>
                    <button class="btn btn-icon btn-light" @click="decreaseHeight"><i class="fas fa-minus"></i></button>
                    <button class="btn btn-icon btn-light" @click="increaseHeight"><i class="fas fa-plus"></i></button>
                    <div class="form-group">
                        <input class="form-control" type="number" v-model="height" id="height" :min="0">
                    </div>
                </div>
            </div>


            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th>BP Percentile</th>
                    <th>5%</th>
                    <th>10%</th>
                    <th>25%</th>
                    <th>50%</th>
                    <th>75%</th>
                    <th>90%</th>
                    <th>95%</th>
                </tr>
                </thead>
                <tbody v-for="(row, index)  in tableData" v-bind:key="index" v-show="showRow(index)">
                <tr v-for="(field, fieldIndex) in fieldsOrder" v-bind:key="fieldIndex">
                    <td v-if="fieldIndex===0" rowspan="6">
                        {{index+1}}
                    </td>
                    <td>{{field}}</td>
                    <td v-for="(col, colIndex) in row[field]"
                        v-bind:key="colIndex"
                        v-bind:class="{ active: isSelected(row['Height (cm)'], colIndex) }"
                    >{{col}}
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
import { indexOfRange } from '../assets/helpers';

export default {
  name: 'SbpTable',
  props: {
    msg: String,
    headline: String,
    tableData: Array
  },
  data() {
    return {
      // tableData: [tableData[0]],
      age: 0,
      height: 0,
      minAge: 0,
      maxAge: 17,
      fieldsOrder: [
        'Height (in)',
        'Height (cm)',
        '50th',
        '90th',
        '95th',
        '95th + 12 mm Hg'],
    };
  },
  methods: {
    showRow(rowNumber) {
      const age = parseInt(this.age);
      if (age === 0) return true;
      // console.info(this.age === rowNumber);
      return age === (rowNumber + 1);
    },
    increaseAge() {
      const age = parseInt(this.age);
      if (age + 1 <= this.maxAge) {
        this.age = age + 1;
      }
    },
    decreaseAge() {
      const age = parseInt(this.age);
      if (age - 1 >= this.minAge) {
        this.age = age - 1;
      }
    },
    increaseHeight() {
      const height = parseInt(this.height);
      this.height = height + 1;
    },
    decreaseHeight() {
      const height = parseInt(this.height);
      if (height - 1 >= 0) {
        this.height = height - 1;
      }
    },
    isSelected(arr, index) {
      const height = parseInt(this.height);
      if (height <= 0) {
        return false;
      }
      const i = indexOfRange(arr, height);
      return i === index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table-wrapper{
        margin-top: 60px;
    }
    .form-wrapper {
        display: flex;
        max-width: 90%;
        margin: 5px auto;
        flex-wrap: wrap;
    }

    .input-wrapper {
        display: flex;
        max-width: 400px;
        margin-right: 30px;
    }

    .btn-icon {
        width: 30px;
        height: 30px;
        margin: 3px 5px;
        line-height: 30px;
        padding: 0;
        color: rgba(44, 62, 80, 0.7);
    }

    td.active {
        background: aquamarine;
    }

    label {
        line-height: 40px;
        margin-right: 20px;
    }

    input[type="number"] {
        width: 100px;
    }
</style>
