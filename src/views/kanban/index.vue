<template>
  <div>
    <h1>Tareas</h1>
    <el-row :gutter="20">
      <el-col :sm="6">
    <input class="upload" type="file"></input>
    <el-form label-position="top" label-width="100px" :model="task">
 <!--  <el-form-item label="Id">
    <el-input v-model.number="task.id"></el-input>
  </el-form-item> -->
  <el-form-item label="Titulo">
    <el-input v-model="task.title"></el-input>
  </el-form-item>
  <el-form-item label="Descripcion">
    <el-input v-model="task.description"></el-input>
  </el-form-item>
  <el-form-item label="Estado">
    <el-select v-model="task.status" placeholder="...">
    <el-option label="Por hacer" value="Por-hacer"></el-option>
    <el-option label="En progreso" value="En-progreso"></el-option>
    <el-option label="Devuelta" value="Devuelta"></el-option>
    <el-option label="Terminado" value="Terminado"></el-option>
  </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addTask">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
   </el-col>
    <el-col :sm="18">
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
      <div v-for="stage in stages" :slot="stage">
        <h2>{{ stage }}</h2>
      </div>
      <div v-for="block in blocks" :slot="block.id">
     <!--  <div>
        <strong>id:</strong> {{ block.id }}
      </div> -->
      <strong>{{ block.title }}</strong>
      <i>{{ block.description }}</i>
      </div>
    </kanban-board>
  </el-col>
</el-row>
  </div>
</template>
<script>
import uuid from 'uuid'
export default {
  name: 'tasks',
  data () {
    return {
      stages: ['Por-hacer', 'En-progreso', 'Devuelta', 'Terminado', 'Pruebas'],
      blocks: [],
      task: {}
    }
  },
  methods: {
    updateBlock (id, status) {
      console.log(status)
      this.blocks.find(b => b.id === id).status = status
    },
    addTask () {
      this.task.id = uuid()
      this.blocks.push(Object.assign({}, this.task))
    }
  },
  mounted () {
  }
}
</script>
<style>
.upload {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
</style>
<style>
  @import '../../assets/kanban.css';
</style>
