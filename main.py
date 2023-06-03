def on_sound_loud():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_sound(DetectedSound.LOUD, on_sound_loud)
