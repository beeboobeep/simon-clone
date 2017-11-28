import Tone from 'tone'
import StartAudioContext from 'startaudiocontext'

StartAudioContext(Tone.context)

let synthButton = new Tone.Synth(
    {oscillator  : {
        type  : 'triangle'
        }  ,
    envelope  : {
        attack  : 0.005,
        decay  : 0.1,
        sustain  : 0.3,
        release  : 0.005
    }}).toMaster()

let synthError = new Tone.Synth(
    {oscillator  : {
        type  : 'square'
        }  ,
    envelope  : {
        attack  : 0.005,
        decay  : 0.1,
        sustain  : 0.3,
        release  : 0.005
    }}).toMaster()

let button = (id) => {
    switch (id) {
        case 3:
            return 'G4'
        case 1:
            return 'C4'
        case 0:
            return 'G3'
        case 2:
            return 'E4'
        default: break
    }
}

let buttonSound = {
    startSound: (id) => synthButton.triggerAttack(button(id)),
    stopSound: () => synthButton.triggerRelease()
}
    

let errorSound = () => synthError.triggerAttackRelease('C2', '2n')

export {buttonSound, errorSound}