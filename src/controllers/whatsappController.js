const VerfiToken = (req, res) => {

    res.send('Token is verified');

}

const ReceivedMesage = (req, res) => {

    res.send('Token is ReceivedMesage');

}

module.exports = {
    VerfiToken,
    ReceivedMesage
}