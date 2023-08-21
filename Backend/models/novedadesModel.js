var pool = require('./bd');
// MOSTRAR
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}
// AGREGAR
async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// ELIMINAR
async function deleteNovedadesByid(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}
// MODIFICAR
async function getNovedadesByid(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}
 async function modificarNovedadesByid(obj, id) {
    try {
        var query = 'update novedades set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch (error) {
        throw error;
    }
 }

module.exports = { getNovedades,insertNovedad,deleteNovedadesByid,getNovedadesByid,modificarNovedadesByid }