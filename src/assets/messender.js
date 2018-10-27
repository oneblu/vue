export function mensaje (type, msg) {
  if (type === 'success') {
    this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success'
      })
  }
}