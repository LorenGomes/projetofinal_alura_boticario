const Contato = require('../models/contato.model');


async function getAllContatos(req, res, next) {

    try {
        const contatos = await Contato.find({});
        res.send(contatos);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }


}

async function addContato(req, res) {
    const { nome, email, telefone, assunto, mensagem } = req.body;
    
    try {
        const contato = new Contato({  nome, email, telefone, assunto, mensagem  });
        await contato.save();
        res.send(contato);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

}

async function updateContato(req, res) {
    const { id } = req.params;
    const { nome, email, telefone, assunto, mensagem } = req.body;

    try {
        const contato = await Contato.findByIdAndUpdate(id, { nome, email, telefone, assunto, mensagem }, { new: true });
        res.send(contato);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

}

async function deleteContato(req, res) {
    const { id } = req.params;

    try {
        const contato = await Contato.findByIdAndDelete(id);
        res.send(contato);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }


}





module.exports = {
    getAllContatos: getAllContatos,
    addContato: addContato,
    updateContato: updateContato,
    deleteContato: deleteContato,
};
