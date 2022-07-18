<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemotestImage extends Model
{
    protected $fillable = [
        'url', 'memotest_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function memotest(): BelongsTo
    {
        return $this->belongsTo(Memotest::class);
    }
}
