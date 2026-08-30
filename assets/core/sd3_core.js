/* @ts-self-types="./sd3_core.d.ts" */

export class AreaActorsV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaActorsV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaActorsV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaActorsV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areaactorsv1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    count() {
        const ret = wasm.areaactorsv1_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint16Array}
     */
    dialogs() {
        const ret = wasm.areaactorsv1_dialogs(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    group_cells() {
        const ret = wasm.areaactorsv1_group_cells(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    no_level() {
        const ret = wasm.areaactorsv1_no_level(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    row_words() {
        const ret = wasm.areaactorsv1_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint16Array}
     */
    rows() {
        const ret = wasm.areaactorsv1_rows(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) AreaActorsV1.prototype[Symbol.dispose] = AreaActorsV1.prototype.free;

export class AreaCollisionV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaCollisionV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaCollisionV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaCollisionV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areacollisionv1_free(ptr, 0);
    }
    /**
     * One D7D610 remapped corner mask per cell, row-major.
     * @returns {Uint8Array}
     */
    corner_masks() {
        const ret = wasm.areacollisionv1_corner_masks(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    height() {
        const ret = wasm.areacollisionv1_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One C11776 branch family per cell, row-major. These are routes, not
     * walkability: every one stops at the first test needing the live object
     * record, the probe coordinates, staged motion or transition state.
     * @returns {Uint8Array}
     */
    routes() {
        const ret = wasm.areacollisionv1_routes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    width() {
        const ret = wasm.areacollisionv1_width(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) AreaCollisionV1.prototype[Symbol.dispose] = AreaCollisionV1.prototype.free;

export class AreaGatesV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaGatesV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaGatesV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaGatesV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areagatesv1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    count() {
        const ret = wasm.areagatesv1_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    entrance_count() {
        const ret = wasm.areagatesv1_entrance_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    entrance_row_words() {
        const ret = wasm.areagatesv1_entrance_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    entrance_rows() {
        const ret = wasm.areagatesv1_entrance_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    no_value() {
        const ret = wasm.areagatesv1_no_value(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    row_words() {
        const ret = wasm.areagatesv1_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    rows() {
        const ret = wasm.areagatesv1_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Where that pointer stood once both planes had been scanned.
     * @returns {number}
     */
    special_cell_payload_end() {
        const ret = wasm.areagatesv1_special_cell_payload_end(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Where the shared payload pointer stood as this plane's scan began.
     * Both planes consume from one pointer and BG1 is scanned first, so a
     * plane's records only mean anything against the place they came from.
     * @param {number} plane
     * @returns {number}
     */
    special_cell_payload_start(plane) {
        const ret = wasm.areagatesv1_special_cell_payload_start(this.__wbg_ptr, plane);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] >>> 0;
    }
    /**
     * The exact four-byte C248DF scripted-cell records for one plane, plus
     * its `$FFFF` terminator. Plane 0 is BG1 and plane 1 is BG2.
     * @param {number} plane
     * @returns {Uint8Array}
     */
    special_cells(plane) {
        const ret = wasm.areagatesv1_special_cells(this.__wbg_ptr, plane);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) AreaGatesV1.prototype[Symbol.dispose] = AreaGatesV1.prototype.free;

export class AreaGraphV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaGraphV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaGraphV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaGraphV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areagraphv1_free(ptr, 0);
    }
    /**
     * How many entries the bank-$CB descriptor array holds, derived from the
     * ROM rather than asserted.
     * @returns {number}
     */
    descriptor_count() {
        const ret = wasm.areagraphv1_descriptor_count(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    directory_count() {
        const ret = wasm.areagraphv1_directory_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    directory_row_words() {
        const ret = wasm.areagraphv1_directory_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    directory_rows() {
        const ret = wasm.areagraphv1_directory_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    edge_count() {
        const ret = wasm.areagraphv1_edge_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    edge_row_words() {
        const ret = wasm.areagraphv1_edge_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    edge_rows() {
        const ret = wasm.areagraphv1_edge_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Areas the scan accepted but whose decode did not complete, as ids and
     * the error codes they failed with. An area that did not decode is named
     * rather than quietly missing from the graph.
     * @returns {Uint16Array}
     */
    failure_areas() {
        const ret = wasm.areagraphv1_failure_areas(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {string[]}
     */
    failure_codes() {
        const ret = wasm.areagraphv1_failure_codes(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * How many of those the discovery scan accepted as field areas.
     * @returns {number}
     */
    listed_area_count() {
        const ret = wasm.areagraphv1_listed_area_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    node_count() {
        const ret = wasm.areagraphv1_node_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Every node's distinct event indices, in node order. An event names no
     * destination, so it is here and not among the edges.
     * @returns {Uint32Array}
     */
    node_events() {
        const ret = wasm.areagraphv1_node_events(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {number}
     */
    node_row_words() {
        const ret = wasm.areagraphv1_node_row_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint32Array}
     */
    node_rows() {
        const ret = wasm.areagraphv1_node_rows(this.__wbg_ptr);
        var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Direct destinations no accepted descriptor claims.
     * @returns {Uint16Array}
     */
    unlisted_destinations() {
        const ret = wasm.areagraphv1_unlisted_destinations(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * Listed areas no direct gate anywhere points at.
     * @returns {Uint16Array}
     */
    unreached_areas() {
        const ret = wasm.areagraphv1_unreached_areas(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) AreaGraphV1.prototype[Symbol.dispose] = AreaGraphV1.prototype.free;

export class AreaSpawnToggleV1 {
    static __wrap(ptr) {
        const obj = Object.create(AreaSpawnToggleV1.prototype);
        obj.__wbg_ptr = ptr;
        AreaSpawnToggleV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AreaSpawnToggleV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_areaspawntogglev1_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    change_bytes() {
        const ret = wasm.areaspawntogglev1_change_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    change_count() {
        const ret = wasm.areaspawntogglev1_change_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * row, column, index before, index after, for every rewritten cell.
     * @returns {Uint8Array}
     */
    changes() {
        const ret = wasm.areaspawntogglev1_changes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * trigger, subtract, left, top, columns, rows. An unrecognised trigger
     * leaves the block empty, which is C22F9F returning without writing and
     * not a refusal.
     * @returns {Uint8Array}
     */
    header() {
        const ret = wasm.areaspawntogglev1_header(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    header_words() {
        const ret = wasm.areaspawntogglev1_header_words(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * The plane's metatile indices after the toggle, row-major. A rewritten
     * cell also loses its flip bits, because C22F9F writes the whole word.
     * @returns {Uint8Array}
     */
    toggled_indices() {
        const ret = wasm.areaspawntogglev1_toggled_indices(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) AreaSpawnToggleV1.prototype[Symbol.dispose] = AreaSpawnToggleV1.prototype.free;

export class Decoder {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DecoderFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_decoder_free(ptr, 0);
    }
    /**
     * The group table: 512 rows of three combatant ids, in row order.
     *
     * A group placement record names cells but no id; its combatants come
     * from here. Which row a record selects is built from state this port
     * does not decode, so the table is exposed as the structure it is rather
     * than joined to a record.
     * @returns {Uint8Array}
     */
    actor_group_table() {
        const ret = wasm.decoder_actor_group_table(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * How many animated-tile frames this area declares. One means the area has
     * no animated tiles, or declares none this port can drive.
     * @param {number} area_id
     * @returns {number}
     */
    animation_frames(area_id) {
        const ret = wasm.decoder_animation_frames(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
    }
    /**
     * The fixed `$C4:F800` frame images, as three fifteen-colour
     * sub-palette-0 frames followed by the three sub-palette-1 colours the
     * same builder commits. The builder reads no area, phase or palette set,
     * so this takes no argument.
     * @returns {Uint16Array}
     */
    c4_palette_frames() {
        const ret = wasm.decoder_c4_palette_frames(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {string}
     */
    capabilities() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.decoder_capabilities(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The actors one area places, in script order.
     *
     * This is the pre-spawn progression every earlier domain decodes: the
     * records whose spawn window admits an all-zero progression, plus the
     * event-flag records no ROM-only decode can decide. It does not resolve a
     * group's combatant ids, which come from a table this port has not yet
     * proven.
     * @param {number} area_id
     * @returns {AreaActorsV1}
     */
    decode_actors(area_id) {
        const ret = wasm.decoder_decode_actors(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaActorsV1.__wrap(ret[0]);
    }
    /**
     * The whole-ROM field-area connectivity graph.
     *
     * One node per descriptor the scan accepts, one edge per direct gate,
     * and every ordinary directory entry with whether any scripted cell
     * names it. Areas carrying conditional layout patches are scanned once
     * per layout the ROM's own tests can select, so a gate reports whether
     * it exists in all of them.
     * @returns {AreaGraphV1}
     */
    decode_area_graph() {
        const ret = wasm.decoder_decode_area_graph(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaGraphV1.__wrap(ret[0]);
    }
    /**
     * Decodes one area at one clock phase and one animated-tile frame. Which (area, phase) pairs a release
     * may show is decided by its published coverage manifests, not here: this
     * decodes any phase the palette handlers implement and fails closed on the
     * rest.
     * @param {number} area_id
     * @param {number} phase
     * @param {number} frame
     * @param {number} step
     * @returns {StaticBgMapStateV1}
     */
    decode_bg_map(area_id, phase, frame, step) {
        const ret = wasm.decoder_decode_bg_map(this.__wbg_ptr, area_id, phase, frame, step);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return StaticBgMapStateV1.__wrap(ret[0]);
    }
    /**
     * One plane's C11776 branch families and C11955 corner masks.
     *
     * Which plane C11239 walks is object field $000E, preserved by the
     * caller's Z flag, so the plane is the caller's to name and not
     * something the layout decides. Plane 0 is BG1 and plane 1 is BG2.
     * @param {number} area_id
     * @param {number} plane
     * @returns {AreaCollisionV1}
     */
    decode_collision(area_id, plane) {
        const ret = wasm.decoder_decode_collision(this.__wbg_ptr, area_id, plane);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaCollisionV1.__wrap(ret[0]);
    }
    /**
     * The area's transition surface: every scripted cell its layout carries,
     * resolved through C22DDE and C22941, and every ordinary directory entry
     * that names this area as a destination.
     *
     * The scan runs on the pre-spawn layout, which is where C24880 itself
     * runs. Layout patches change which cells exist, so this is the all-zero
     * progression and not a claim about any other.
     * @param {number} area_id
     * @returns {AreaGatesV1}
     */
    decode_gates(area_id) {
        const ret = wasm.decoder_decode_gates(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaGatesV1.__wrap(ret[0]);
    }
    /**
     * C22F9F's post-load toggle at one spawn cell on one plane.
     *
     * The spawn is the caller's because which entrance a player took is live
     * state. The entrances an area has are not: `decode_gates` reports them,
     * and each names a plane and a cell. A spawn outside the layout, or one
     * whose block would run off it, is refused rather than clipped.
     * @param {number} area_id
     * @param {number} plane
     * @param {number} spawn_x
     * @param {number} spawn_y
     * @returns {AreaSpawnToggleV1}
     */
    decode_spawn_toggle(area_id, plane, spawn_x, spawn_y) {
        const ret = wasm.decoder_decode_spawn_toggle(this.__wbg_ptr, area_id, plane, spawn_x, spawn_y);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AreaSpawnToggleV1.__wrap(ret[0]);
    }
    dispose() {
        wasm.decoder_dispose(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array} rom
     */
    constructor(rom) {
        const ptr0 = passArray8ToWasm0(rom, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.decoder_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        DecoderFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    owned_rom_bytes() {
        const ret = wasm.decoder_owned_rom_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * How many palette-animation steps this area declares. One means it has no
     * migrated colour-rotation band.
     * @param {number} area_id
     * @returns {number}
     */
    palette_steps(area_id) {
        const ret = wasm.decoder_palette_steps(this.__wbg_ptr, area_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] >>> 0;
    }
    /**
     * Every progression state this area's placement script can tell apart.
     *
     * Flattened as `count`, then that many `(variable, nibble)` byte pairs,
     * per class in enumeration order. A class carrying no pair is an area
     * whose placements read no progression at all. These are contexts, not
     * states: the 256-byte array is never enumerated, only the equivalence
     * classes the script's own windows carve out of it.
     * @param {number} area_id
     * @returns {Uint8Array}
     */
    progression_classes(area_id) {
        const ret = wasm.decoder_progression_classes(this.__wbg_ptr, area_id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Which records each of this area's progression classes admits, as one
     * liveness code per record per class, classes in enumeration order.
     *
     * 0 retired, 1 live, 2 undecidable - the answer an event-flag record gets,
     * because the flag store is runtime state the ROM does not carry.
     * @param {number} area_id
     * @returns {Uint8Array}
     */
    progression_liveness(area_id) {
        const ret = wasm.decoder_progression_liveness(this.__wbg_ptr, area_id);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint16Array}
     */
    supported_indices() {
        const ret = wasm.decoder_supported_indices(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
}
if (Symbol.dispose) Decoder.prototype[Symbol.dispose] = Decoder.prototype.free;

export class StaticBgMapStateV1 {
    static __wrap(ptr) {
        const obj = Object.create(StaticBgMapStateV1.prototype);
        obj.__wbg_ptr = ptr;
        StaticBgMapStateV1Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        StaticBgMapStateV1Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_staticbgmapstatev1_free(ptr, 0);
    }
    /**
     * @returns {Uint16Array}
     */
    bg1_map() {
        const ret = wasm.staticbgmapstatev1_bg1_map(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint16Array}
     */
    bg2_map() {
        const ret = wasm.staticbgmapstatev1_bg2_map(this.__wbg_ptr);
        var v1 = getArrayU16FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 2, 2);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    cgram() {
        const ret = wasm.staticbgmapstatev1_cgram(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    fixed_color_bgr555() {
        const ret = wasm.staticbgmapstatev1_fixed_color_bgr555(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    has_bg2_map() {
        const ret = wasm.staticbgmapstatev1_has_bg2_map(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    map_height() {
        const ret = wasm.staticbgmapstatev1_map_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    map_width() {
        const ret = wasm.staticbgmapstatev1_map_width(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint8Array}
     */
    registers() {
        const ret = wasm.staticbgmapstatev1_registers(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    tiles() {
        const ret = wasm.staticbgmapstatev1_tiles(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    tiles_vram_word() {
        const ret = wasm.staticbgmapstatev1_tiles_vram_word(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) StaticBgMapStateV1.prototype[Symbol.dispose] = StaticBgMapStateV1.prototype.free;

/**
 * @returns {number}
 */
export function production_rom_length() {
    const ret = wasm.production_rom_length();
    return ret >>> 0;
}

/**
 * @returns {string}
 */
export function production_rom_sha256() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.production_rom_sha256();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
 * @returns {boolean}
 */
export function static_codec_probe_v1() {
    const ret = wasm.static_codec_probe_v1();
    return ret !== 0;
}

/**
 * @param {Uint8Array} rom
 * @param {number} expected_length
 * @param {string} expected_sha256
 */
export function validate_rom_identity(rom, expected_length, expected_sha256) {
    const ptr0 = passArray8ToWasm0(rom, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(expected_sha256, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.validate_rom_identity(ptr0, len0, expected_length, ptr1, len1);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./sd3_core_bg.js": import0,
    };
}

const AreaActorsV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areaactorsv1_free(ptr, 1));
const AreaCollisionV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areacollisionv1_free(ptr, 1));
const AreaGatesV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areagatesv1_free(ptr, 1));
const AreaGraphV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areagraphv1_free(ptr, 1));
const AreaSpawnToggleV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_areaspawntogglev1_free(ptr, 1));
const DecoderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_decoder_free(ptr, 1));
const StaticBgMapStateV1Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_staticbgmapstatev1_free(ptr, 1));

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('sd3_core_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
