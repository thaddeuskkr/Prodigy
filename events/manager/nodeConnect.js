module.exports = async (client, node) => {
    client.log(1, `Node "${node.options.identifier}" connected.`);
};