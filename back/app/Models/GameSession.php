<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GameSession extends Model
{
    const STATE_STARTED = 'started';
    const STATE_COMPLETED = 'completed';

    protected $fillable = [
        'number_of_pairs', 'state', 'memotest_id', 'retries',
    ];

    /**
     * @return BelongsTo
     */
    public function memotest(): BelongsTo
    {
        return $this->belongsTo(Memotest::class);
    }
}
