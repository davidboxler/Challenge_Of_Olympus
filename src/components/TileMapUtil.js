// tilemapUtils.js
export function loadTilemap(scene, mapKey, tilesetKey, tilesetImage, layerName) {
  const map = scene.make.tilemap({ key: mapKey });
  const tileset = map.addTilesetImage(tilesetKey, tilesetImage);
  const layer = map.createLayer(layerName, tileset, 0, 0);
  return { map, layer };
}
/**
 * Función para crear y configurar una capa del tilemap.
 * @param {Phaser.Tilemaps.Tilemap} tilemap - El tilemap al que se añadirá la capa.
 * @param {string} layerName - El nombre de la capa en el tilemap.
 * @param {Phaser.Tilemaps.Tileset} tileset - El tileset a utilizar en la capa.
 * @param {number} x - Posición X inicial de la capa.
 * @param {number} y - Posición Y inicial de la capa.
 * @returns {Phaser.Tilemaps.TilemapLayer} - La capa creada.
 */
export function createTilemapLayer(tilemap, layerName, tileset, x = 0, y = 0) {
    const layer = tilemap.createLayer(layerName, tileset, x, y);
    return layer;
  }
  
  /**
   * Función para añadir un tileset al tilemap.
   * @param {Phaser.Tilemaps.Tilemap} tilemap - El tilemap al que se añadirá el tileset.
   * @param {string} tilesetName - El nombre del tileset en Tiled.
   * @param {string} key - La clave de la imagen cargada del tileset.
   * @returns {Phaser.Tilemaps.Tileset} - El tileset creado.
   */
  export function addTileset(tilemap, tilesetName, key) {
    return tilemap.addTilesetImage(tilesetName, key);
  }
  
  /**
   * Función para encontrar un objeto dentro de una capa de objetos del tilemap.
   * @param {Phaser.Tilemaps.Tilemap} tilemap - El tilemap del que se obtendrán los objetos.
   * @param {string} objectLayerName - El nombre de la capa de objetos en el tilemap.
   * @param {string} objectName - El nombre del objeto a buscar dentro de la capa.
   * @returns {object} - El objeto encontrado.
   */
  export function findObjectByName(tilemap, objectLayerName, objectName) {
    return tilemap.findObject(objectLayerName, (obj) => obj.name === objectName);
  }